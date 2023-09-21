export class LaasConstants {

  public static readonly facilityKey = 'laas_facility';
  public static readonly defaultFacility = 'LK';
  public static readonly dropdownListKey = 'dropdownList';
  public static readonly errorCodeListKey = 'errorCodeList';
  public static readonly facilityTimeZoneMap = new Map<string, string>([
    ['LK', '+0800'],
    ['HK', '+0800'],
    ['SG', '+0800']
  ]);
}
