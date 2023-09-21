import { PermissionConstants } from "../constants/permission-constants.constant";
import { SimpleChanges } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

export function isNumeric(value: any): boolean {
  return isNaN(Number(value)) === false;
}

export function isNullOrEmpty(value: any): boolean {
  return typeof value === 'undefined' || value == null || (typeof value === 'string' && value === '');
}

export function deepCopy<T>(obj: T): T | null {
  if (isNullOrEmpty(obj)) {
    return null;
  }

  return JSON.parse(JSON.stringify(obj));
}

export function isJSON(value: string): boolean {
  try {
    JSON.parse(value);
  } catch {
    return false;
  }
  return true;
}

export function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export function mergeDeep(target: any, source: any): any {
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

export function getMaxDate(): Date {
  return new Date(8640000000000000);
}

export function getDataScopeByPermission(userProfile: any, permissionCode: PermissionConstants){
  var filterRoles = getRolesByPermission(userProfile, permissionCode);

  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return {
        tenant: x.tenantCode == "" ? null : x.tenantCode,
        dept: x.dept == "" ? null : x.dept,
        customer: x.customer == "" ? null : x.customer,
        facility: x.facilityCode == "" ? null : x.facilityCode,
        orgId: x.orgId == "" ? null : x.orgId,
        brand: x.brand == "" ? null : x.brand,
        forwarder: x.forwarderCode == "" ? null : x.forwarderCode
    };
  });
}

export function getTenantByPermission(userProfile: any, permissionCode: PermissionConstants){
  var filterRoles = getRolesByPermission(userProfile, permissionCode);

  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return x.tenantCode;
  });
}

export function getDeptByPermission(userProfile: any, permissionCode: PermissionConstants){
  var filterRoles = getRolesByPermission(userProfile, permissionCode);

  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return x.dept;
  });
}

export function getFacilityByPermission(userProfile: any, permissionCode: PermissionConstants){
  var filterRoles = getRolesByPermission(userProfile, permissionCode);

  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return x.facilityCode;
  });
}

export function getOrgIdByPermission(userProfile: any, permissionCode: PermissionConstants) {
  var filterRoles = getRolesByPermission(userProfile, permissionCode);
  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return x.orgId;
  });
}

export function getBrandByPermission(userProfile: any, permissionCode: PermissionConstants){
  var filterRoles = getRolesByPermission(userProfile, permissionCode);

  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return x.brand;
  });
}

export function getForwarderByPermission(userProfile: any, permissionCode: PermissionConstants){
  var filterRoles = getRolesByPermission(userProfile, permissionCode);

  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return x.forwarderCode;
  });
}

export function getCustomerByPermission(userProfile: any, permissionCode: PermissionConstants){
  var filterRoles = getRolesByPermission(userProfile, permissionCode);

  return (Object.values(filterRoles).reduce((c: any, i: any) => c.concat(i.scopes), []) as any).map((x: any) => {
    return x.customer;
  });
}

function getRolesByPermission(userProfile: any, permissionCode: PermissionConstants){
  return deepCopy(userProfile.roles.filter((role: any) => {
    var permissionCodes = role.permissions.map((permission: any) => {
      return permission.permissionCode;
    });
    return permissionCodes.includes(permissionCode);
  }));
}

export function getAllPermission(userProfile: any){
  return deepCopy(Object.values(userProfile.roles).reduce((c: any, i: any) => c.concat(i.permissions), []) as any).map((x: any) => {
    return x.permissionCode;
  });
}

export function getDefaultDT() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2){
    month = '0' + month;
  }

  if (day.length < 2){
    day = '0' + day;
  }
  var temp = [];
  temp[0] = new Date([year, month, day].join('-') + " " + "00:00:00");
  temp[1] = new Date([year, month, day].join('-') + " " + "23:59:59");
  return temp;
}

export function getCreateDateBy(addDays: number = 0) {
  var d = new Date();
  d.setDate(d.getDate() + addDays);
  var month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2){
    month = '0' + month;
  }

  if (day.length < 2){
    day = '0' + day;
  }
  var temp = [];
  temp[0] = new Date([year, month, day].join('-') + " " + "00:00:00");
  temp[1] = new Date([year, month, day].join('-') + " " + "23:59:59");
  return temp;
}

export function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days);
  return date;
}

export function laaSFormatString(str: string, _array: string[]){
  for (var i = 0; i <= _array.length; i++) {
       var reg = new RegExp("\\{" + i + "\\}", "gm");
       str = str.replace(reg, _array[i]);
  }
  return str;
}

export function onChanges(changes: SimpleChanges, selectedCols: any): any {
  if (!isNullOrEmpty(changes.defaultColumns)) {
    changes.defaultColumns.currentValue?.forEach((x: any) => {
      if (isNullOrEmpty(x.sort)) {
        x.sort = false;
      }
      if (isNullOrEmpty(x.display)) {
        x.display = true;
      }
    });

    if (!isNullOrEmpty(changes.defaultColumns.currentValue)) {
      const screenWidth = window.screen.width;
      const displayColumn = changes.defaultColumns.currentValue.filter(
        (x: any) => x.display
      );
      const totalColumnDisplay = displayColumn.length;
      const width = screenWidth / totalColumnDisplay;
      const columnMinWidth = width < 100 ? 100 : width;
      changes.defaultColumns.currentValue.forEach((x: any) => {
        if (isNullOrEmpty(x.width)) {
          x.width = columnMinWidth;
        }
      });
      selectedCols = displayColumn;
    }
  }
}

export function columnReordered(columns: any, defaultColumns: any[]): void {
  const newColumnOrderList: string[] = [];
  columns.forEach((col: any) => {
    for (const defaultCol of defaultColumns) {
      if (defaultCol.field === col.field) {
        newColumnOrderList.push(col.field);
        break;
      }
      const newIndex = columns.findIndex(
        (y: { field: any }) => y.field === defaultCol.field
      );
      if (newIndex < 0 && !newColumnOrderList.includes(defaultCol.field)) {
        newColumnOrderList.push(defaultCol.field);
      }
    }
  });

  defaultColumns.forEach((col) => {
    if (!newColumnOrderList.includes(col.field)) {
      newColumnOrderList.push(col.field);
    }
  });

  newColumnOrderList.forEach((field, index) => {
    const idx = defaultColumns.findIndex((y) => y.field === field);
    if (idx > -1) {
      defaultColumns[idx].order = index;
    }
  });
}

export function nullIfEmptyArray<T>(list: T[] | null): T[] | null {
  return (list && list.length > 0) ? list : null; // if list is null, then return null
}

export function genTableTranslation(translateService: TranslateService, fields: string[], dates: string[], fieldSorts: string[], jsons: string[]): any[] {
  var tmpcolumn: any[] = [];
  for (let i = 0; i < fields.length; i++) {
    translateService.get(jsons[i]).subscribe((translation: string) => {
      if (dates.includes(fields[i])) {
        tmpcolumn[i] = ({ field: fields[i], header: translation, dataType: 'date', sort: fieldSorts.includes(fields[i]) });
        return;
      }
      tmpcolumn[i] = ({ field: fields[i], header: translation, sort: fieldSorts.includes(fields[i]) })
    });
  }
  return tmpcolumn;
}

