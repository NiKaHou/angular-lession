import { isNullOrEmpty } from 'src/app/core-function/utils/common-functions';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  logisticsUrl = 'https://iservice-dev.laasholdings.com/logistics';
  getImportExportLicenceApplyInfoList(language: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  /**
   * Get facility dropdown list options by country name.
   * @param countryName Country name
   */
  getFacilityOptions(countryName?: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/facilityoptions/${isNullOrEmpty(countryName) ? '' : countryName}`;
    return this.http.get(url);
  }

  getAccountOptions(facilityCode?: string, optionType?: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/option/${optionType}?facilityCode=${facilityCode}`
    return this.http.get(url);
  }

  /**
   * Get forwarder dropdown list options by facility code.
   * @param facilityCode Facility code
   */
  getForwarderOptions(facilityCode: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/forwarderoptions/${facilityCode}`;
    return this.http.get(url);
  }

  /**
   * Get car seq dropdown list options by facility code.
   * @param facilityCode Facility code
   */
  getCarSeqOptions(facilityCode: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/carseqoptions/${facilityCode}`;
    return this.http.get(url);
  }

  /**
   * Get car type dropdown list options.
   */
  getCarTypeOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/cartypeoptions`;
    return this.http.get(url);
  }

  /**
   * Get letter org dropdown list options.
   */
  getLetterOrgOptions(facility: string, orgId?: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/letterorgoptions/${facility}?orgId=${orgId}`;
    return this.http.get(url);
  }

  /**
   * Get region dropdown list options.
   */
  getArea(facility: string): Observable<any> {
    const url = `${this.logisticsUrl}/RFQ/RFQArea/${facility}`;
    return this.http.get(url);
  }

  /**
   * Get forwarder account by giving facility and forwarder name.
   * @param facility Facility code
   * @param forwarderName Forwarder name
   */
  getAccountIdOptions(facility: string, forwarderName: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/accountOption/${facility}/${forwarderName}`;
    return this.http.get(url);
  }

  /**
   * Get incoTerm dropdown list options
   */
  getIncoTermOption(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/incotermOption`;
    return this.http.get(url);
  }

  /**
   * Get pickup location dropdown list options by facility code.
   * @param facilityCode Facility code
   */
  getPickupLocationOptions(facilityCode: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/pickupLocationOption/${facilityCode}`;
    return this.http.get(url);
  }

  /**
   * Get delivery type by giving Input/Output type.
   * @param IOType Input/Output
   */
  getDeliveryTypeOptions(IOType: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/deliveryTypeOption/${IOType}`;
    return this.http.get(url);
  }

  /**
   * Get delivery sub-type by giving Input/Output type.
   * @param IOType Input/Output
   */
  getDeliverySubTypeOptions(IOType: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/deliverySubTypeOption/${IOType}`;
    return this.http.get(url);
  }

  /**
   * Get facility forwarder express info.
   * @param facility Facility code
   * @param forwarder Forwarder name
   */
  getFacilityForwarderExpressInfo(facility: string, forwarder: string) {
    const url = `${this.logisticsUrl}/facility/forwarder/expressinfo/${facility}/${forwarder}`;
    return this.http.get(url);
  }

  /**
   * get org Id options
   */
  getOrgIdOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/orgIdOption`;
    return this.http.get(url);
  }

  /**
   * get export status by facility
   * @param facility facility
   */
  getExportStatusOptions(facility: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/exportStatusOptions/${facility}`;
    return this.http.get(url);
  }

  /**
   * get Bill Object Options By facility
   */
  getBillObjectOptions(facility: string, billObjectType: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/billObjectOptions/${facility}/${billObjectType}`;
    return this.http.get(url);
  }

  /**
   * get BillObjectType options
   */
  getBillObjectTypeOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/billObjectTypeOption`;
    return this.http.get(url);
  }

  /**
   * get ShipMethod options
   */
  getShipMethodOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/shipMethodOption`;
    return this.http.get(url);
  }

  /**
   * get docType Options
   */
  getDocTypeOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/docTypeOption`;
    return this.http.get(url);
  }

  /**
   * get docType1 Options
   */
  getDocType1Options(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/docType1Option`;
    return this.http.get(url);
  }

  /**
   * get Currency Options
   */
  getCurrencyOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/currencyOption`;
    return this.http.get(url);
  }

  /**
   * get Export Code Options By Facility
   * @param facility
   */
  getExportCodeOptions(facility: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/exportCodeOptions/${facility}`;
    return this.http.get(url);
  }


  /**
   * get country data
   */
  getCountryOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/countryOptions`;
    return this.http.get(url);
  }

  /**
 * get city data
 * @param country
 */
  getCityOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/cityOptions`;
    return this.http.get(url);
  }

  /**
   * get area data
   */
  getAllAreaOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/RFQ/areaOptions`;
    return this.http.get(url);
  }

  /**
* get city data
* @param country
*/
  getAirPortOptions(citySeq: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/airPortOptions/${citySeq}`;
    return this.http.get(url);
  }


  /*
* get ImportDeclarationStatus data
* @param ImportDeclarationStatus
*/
  getImportDeclarationStatusOptions(facilityCode: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/ImportDeclarationStatus/${facilityCode}`;
    return this.http.get(url);
  }

  /**
  * get ImportDocType data
  * @param ImportDocType
  */
  getImportDocTypeOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/docType`;
    return this.http.get(url);
  }

  getBrandOptions(isActivated: Number): Observable<any> {
    const url = `${this.logisticsUrl}/facility/brand/${isActivated}`;
    return this.http.get(url);
  }

  getFacilityOptionsByFacilityCode(facilityCode?: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/getFacilityOptionsByFacilityCode/${facilityCode}`;
    return this.http.get(url);
  }

  getVendorOptions(key?: any): Observable<any> {
    const url = `${this.logisticsUrl}/facility/vendor`;
    return this.http.post(url, key);
  }

  getAllVendorOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/vendorOptions`;
    return this.http.get(url);
  }

  getPickupLocationOptionByDefault(facilityCode: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/pickupLocationOptionByDefault/${facilityCode}`;
    return this.http.get(url);
  }

  getImportTypeOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/importType`;
    return this.http.get(url);
  }

  /**
  * get SourceType data
  */
  getSourceTypeOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/facility/import/ad/sourceType`;
    return this.http.get(url);
  }

  /**
   * get tiem zone
   */
  getTimeZone(facility: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/getTimeZone/${facility}`;
    return this.http.get(url, { responseType: 'text' });
  }
  /**
 * get airport Data
 */
  async getAirPortOptionsAsync(citySeq: string): Promise<any> {
    const url = `${this.logisticsUrl}/facility/airPortOptions/${citySeq}`;
    return this.http.get(url).toPromise();
  }


  getFacilityLocation(facility: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/getFacilityLocation/${facility}`;
    return this.http.get(url);
  }

  getFlowBillTypeOption(facility: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/flowBillTypeOption/${facility}`;
    return this.http.get(url);
  }

  // getExpenseOptions(optionType: String, optionCode: any): Observable<any> {
  //   const url = `${environment.expenseApiUrl}/common/findFacilityOptionsByOptionTypeAndOptionCode/${optionType}${isNullOrEmpty(optionCode) ? '' : '?optionCode=' + optionCode}`;
  //   return this.http.get(url);
  // }

  getAccountCodeOptions(optionType?: string, facilityCode?: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/getAccountCodeOption/${optionType}?facilityCode=${facilityCode}`;
    return this.http.get(url);
  }

  getOptions(facilityCode?: string, optionType?: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/option/${optionType}?facilityCode=${facilityCode}`
    return this.http.get(url);
  }

  getAllFacilityOptions(OptionType?: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/all/facilityOptions/${OptionType}`
    return this.http.get(url);
  }

  getCityOptionsByCountry(country: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/getCityByCountry/${country}`;
    return this.http.get(url);
  }

  getAllFacilityOptionsByOptionType(optionType: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/all/facilityOptions/${optionType}`;
    return this.http.get(url);
  }

  getShipToOptionsByConsigneeKey(request: any): Observable<any> {
    const url = `${this.logisticsUrl}/merge/findShipToOptionsByConsigneeKey`;
    return this.http.post(url, request);
  }

  getCsrOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/merge/findCsrOptions`;
    return this.http.get(url);
  }

  getSalesOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/employee/findSalesOptions`;
    return this.http.get(url);
  }

  getTenantOrgOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/TenantOrg/getTenantOrgOptions`;
    return this.http.get(url);
  }

  getPcsrOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/employee/findPcsrOptions`;
    return this.http.get(url);
  }

  getPcsrAndCsrOptions(): Observable<any> {
    const url = `${this.logisticsUrl}/employee/findPcsrAndCsrOptions`;
    return this.http.get(url);
  }

  getTaskCodeOptions(category: string): Observable<any> {
    const url = `${this.logisticsUrl}/facility/findTaskCodeOptions/${category}`;
    return this.http.get(url);
  }

  getWaitingReferenceOption(facility: string): Observable<any> {
    const url = `${this.logisticsUrl}/doAbnormal/getWaitingReferenceOption?facility=${facility}`;
    return this.http.get(url);
  }
}
