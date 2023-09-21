import { SystemParam } from './entity/system-param';
import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as path from 'path';
import { createConnection, getConnectionOptions, Brackets } from 'typeorm';
import { CodeConverter } from './entity/code-converter';
import * as session from 'express-session';
import * as request from 'request';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import { UserPreference } from './entity/user-preference';
import { ErrorCode } from './entity/error-code';
import { Menu } from './entity/menu';
import { AssignmentDistrict } from './entity/assignment-district';
import { Country } from './entity/country';
import { City } from './entity/city';
import { PortalOperationLogParam } from './entity/portal-operation-log-param';
import { PortalOperationLog } from './entity/portal-operation-log';

let rawdata = fs.readFileSync('server/environment.json').toString();
const config = JSON.parse(rawdata);


const port = 3000;
const app: express.Application = express();

function doRequest(url: string, token: string): Promise<any> {
  return new Promise(function (resolve, reject) {
    request.get(url, { headers: { Authorization: token, 'Ocp-Apim-Subscription-Key': config.apiKey } }, (error, res, body) => {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        console.log('call api error: ' + error);
        reject(error);
      }
    });
  });
}

async function main(envStr: any): Promise<any> {
  console.log("============environment:" + envStr + "================");

  const connectionOptions = await getConnectionOptions();
  console.log(connectionOptions);
  createConnection(connectionOptions).then(async connection => {

    app.use(json());
    app.use(compression());
    app.use(urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });


    if (envStr == "local") {
      console.log("============ add /client path routing ================");
      app.use(express.static(path.join(__dirname, '../client')));
    }

    //set session setting
    app.use(session({
      secret: 'laasportalsecret',
      saveUninitialized: true,
      resave: false,
      cookie: { maxAge: 600 * 1000 * 6 * 2 }  //2 hours
    }));


    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(err.status || 500);
      res.json({
        error: {},
        message: err.message,
      });
    });

    app.get('/api/test', (req: express.Request, res: express.Response) => {
      res.json({ code: '0000', message: 'success' });
    });

    app.get('/api/errorcode/:lang/:category?/:code?', async (req: express.Request, res: express.Response) => {
      const lang = req.params.lang;
      const category = req.params.category;
      const code = req.params.code;

      let queryStatement = connection.getRepository(ErrorCode)
        .createQueryBuilder()
        .where('Lang = :lang', { lang });

      if (category) {
        queryStatement = queryStatement.andWhere('Category = :category', { category });

        if (code) {
          queryStatement = queryStatement.andWhere('ErrorCode = :code', { code });
        }
      }
      const values = await queryStatement.getMany();

      res.json(values);
    });

    app.get('/api/codeconverter/:lang/:maincategory/:subcategory?', async (req: express.Request, res: express.Response) => {
      const lang = req.params.lang;
      const mainCategory = req.params.maincategory;
      const subCategory = req.params.subcategory;

      let queryStatement = connection.getRepository(CodeConverter)
        .createQueryBuilder()
        .where('Lang = :lang', { lang })
        .andWhere('MainCategory = :mainCategory', { mainCategory });

      if (subCategory) {
        queryStatement = queryStatement.andWhere('SubCategory = :subCategory', { subCategory });
      }
      const values = await queryStatement.getMany();

      values.sort((first, second) => {
        first.ordinal = first.ordinal == null ? 99999 : first.ordinal;
        second.ordinal = second.ordinal == null ? 99999 : second.ordinal;
        return first.ordinal - second.ordinal;
      });

      res.json(values);
    });

    app.get('/api/systemparam/:paramkey/:version?', async (req: express.Request, res: express.Response) => {
      const paramkey = req.params.paramkey;
      const version = req.params.version;

      let queryStatement = connection.getRepository(SystemParam)
        .createQueryBuilder()
        .where('Paramkey = :paramkey', { paramkey });

      if (version) {
        queryStatement = queryStatement.andWhere('Version = :version', { version });
      }
      const values = await queryStatement.getMany();

      res.json(values);
    });

    // Get all country
    app.get('/api/country', async (req: express.Request, res: express.Response) => {
      let queryStatement = connection.getRepository(Country)
        .createQueryBuilder();

      const values = await queryStatement.getMany();
      res.json(values);
    })

    // Get city by country
    app.get('/api/city/:country', async (req: express.Request, res: express.Response) => {
      const country = req.params.country;

      let queryStatement = connection.getRepository(City).createQueryBuilder().where('1 = 1');
      if (country !== 'ALL') {
        queryStatement = queryStatement.andWhere('Country = :country', { country });
      }

      const values = await queryStatement.getMany();
      res.json(values);
    });

    // Get assignment district by facility and country
    app.get('/api/assignmentdistrict/:facility/:country?', async (req: express.Request, res: express.Response) => {
      const facility = req.params.facility;
      const country = req.params.country;
      let queryStatement = connection.getRepository(AssignmentDistrict)
        .createQueryBuilder()
        .where('1 = 1')

      if (facility != 'X') {
        queryStatement = queryStatement.andWhere('Facility  = :facility', { facility });
      }

      if (country) {
        queryStatement = queryStatement.andWhere('Country  = :country', { country });
      }

      const values = await queryStatement.getMany();
      res.json(values);
    });

    //logout
    app.get('/api/logout', (req: express.Request, res: express.Response) => {
      console.log('clear session!');
      req.session?.destroy(
        (err) => {
          if (err) {
            console.log('error occur: ');
            console.log(err);
          }
          res.json("ok");
        }
      );
    });

    //get userProfile
    app.get('/api/userprofile', async (req: express.Request, res: express.Response) => {
      const token = req.headers.authorization;
      const url = `${config.authUrl}/authorization`;

      console.log(url);

      var userprofile;

      console.log('session ID:');
      console.log(req.sessionID);

      console.log('before Session:');
      console.log(req.session);

      if (!(req!.session!.userprofile)) {
        //api return
        console.log('api return');
        console.log('token: ' + token);
        try {
          req!.session!.userprofile = await doRequest(url, token!);
        } catch (err) {
          res.json(null);
        }
        userprofile = req!.session!.userprofile;
      } else {
        console.log('session return');
        userprofile = req!.session!.userprofile;
      }

      console.log('after Session:');
      console.log(req.session);

      res.json(userprofile);
    });

    app.get('/api/userpreference/:useruuid', async (req: express.Request, res: express.Response) => {
      const userUUID = req.params.useruuid;

      const queryStatement = connection.getRepository(UserPreference)
        .createQueryBuilder()
        .where('UserUUID = :userUUID', { userUUID });

      const data = await queryStatement.getOne();
      const userPreference = (data?.value === null || data?.value === '' || typeof data?.value === 'undefined') ?
        null : JSON.parse(data.value.toString());

      res.json(userPreference);
    });

    app.put('/api/userpreference/:useruuid', async (req: express.Request, res: express.Response) => {
      const userUUID = req.params.useruuid;
      const value = JSON.stringify(req.body.preference);
      const userName = req.body.userName;
      const now = new Date();
      const preference = {
        userUUID,
        value,
        createUser: userName,
        createDt: now,
        updateUser: userName,
        updateDt: now,
      };

      const repository = connection.getRepository(UserPreference);
      const count = await repository.createQueryBuilder()
        .where('UserUUID = :userUUID', { userUUID })
        .getCount();

      if (count === 0) {
        await repository.createQueryBuilder()
          .insert()
          .values(preference)
          .execute();
      } else {
        await repository.createQueryBuilder()
          .update()
          .set({ value, updateUser: userName, updateDt: now })
          .where('UserUUID = :userUUID', { userUUID })
          .execute();
      }

      res.send({ message: 'ok' });
    });

    app.get('/api/menu', async (req: express.Request, res: express.Response) => {
      const repository = connection.getRepository(Menu);
      const values = await repository.createQueryBuilder().orderBy({
        "Menu.ParentNodeSeqNo": "ASC",
        "Menu.SortPriority": "ASC"
      }).getMany();

      res.json(values);
    });

    app.get('/api/operationLogParam', async (req: express.Request, res: express.Response) => {
      let queryStatement = connection.getRepository(PortalOperationLogParam);
      const values = await queryStatement.find();

      res.json(values);
    });

    app.post('/api/operationLog', async (req: express.Request, res: express.Response) => {
      const userUUID = req.body.useruuid;
      const userName = req.body.userName;
      const menuCode = req.body.menuCode;
      const operation = req.body.operation;
      const operationDesc = req.body.operationDesc;
      const serviceName = req.body.serviceName;
      const serviceURL = req.body.serviceURL;
      const request = req.body.request;
      const response = req.body.response;
      const errorCode = req.body.errorCode;
      const errorDesc = req.body.errorDesc;
      const now = new Date();
      const operationLog = {
        userUUID,
        userName,
        menuCode,
        operation,
        operationDesc,
        serviceName,
        serviceURL,
        request,
        response,
        errorCode,
        errorDesc,
        createDt: now,
        createUser: 'SYSTEM',
        updateDt: now,
        updateUser: 'SYSTEM',
      };

      const repository = connection.getRepository(PortalOperationLog);

      await repository.createQueryBuilder()
        .insert()
        .values(operationLog)
        .execute();

      res.send({ message: 'ok' });
    });

    if (envStr == "local") {
      console.log("============ add client/index.html path routing ================");
      app.get('*', (req: express.Request, res: express.Response) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
      });
    }

    app.listen(port, () => console.log(`Node's Express is listening on Port ${port}..`));

  }).catch(error => console.log(error));
  console.log("express started.");
}

const env = process.argv[2];
main(env);
