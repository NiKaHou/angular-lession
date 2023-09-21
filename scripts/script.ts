
function runs(envStr: any): void {
  const fs = require('fs');
  const envExt = envStr ? `.${envStr}` : '';
  fs.copyFile(`server/environments/ormconfig${envExt}.json`, 'ormconfig.json', (error: any) => {
      if (error) {
          return console.error(error);
      }
  });
  fs.copyFile(`server/environments/environment${envExt}.json`, 'server/environment.json', (error: any) => {
    if (error) {
        return console.error(error);
    }
});
}

const env = process.argv[2];
runs(env);


