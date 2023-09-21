enum EntityType {
  none = 0,
  dir = 1,
  file = 2
}

function getPathEntityNames(srcPath: string, entityType: EntityType): string[] {
  const fs = require('fs');
  return fs.readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent: any) => {
      switch (entityType) {
        case EntityType.dir:
          return dirent.isDirectory();
        case EntityType.file:
          return dirent.isFile();
        default:
          return true;
      }
    })
    .map((dirent: any) => dirent.name);
}

function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target: any, source: any): any {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key: any) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function run(pathStr: any): void {
  const path = require('path');
  const fs = require('fs');

  const targetPath = path.resolve(pathStr);

  if (!fs.existsSync(targetPath)) {
    console.error(`${targetPath} is not exist.`);
    return;
  }

  const i18nDirs = getPathEntityNames(targetPath, EntityType.dir);
  for (const dir of i18nDirs) {
    const langDir = path.resolve(targetPath, dir);
    let langObj = {};
    const files = getPathEntityNames(langDir, EntityType.file);
    for (const file of files) {
      const filename = path.resolve(langDir, file);
      const obj = require(filename);
      langObj = mergeDeep(langObj, obj);
    }
    try {
      fs.writeFileSync(`${targetPath}/${dir}.json`, JSON.stringify(langObj));
      console.log(`i18n ${dir} has been merged.`);
    } catch (error) {
      console.error(error);
    }
  }
}

run(process.argv[2]);


