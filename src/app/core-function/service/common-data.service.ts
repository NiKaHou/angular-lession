import { isNullOrEmpty } from 'src/app/core-function/utils/common-functions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CodeConverter } from 'server/entity/code-converter';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor(private http: HttpClient) { }

  getCodeConverter(lang: string, mainCategory: string, subCategory?: string): Observable<any> {
    const url = `/api/codeconverter/${lang}/${mainCategory}/${isNullOrEmpty(subCategory) ? '' : subCategory}`;
    return this.http.get<CodeConverter[]>(url).pipe(map(options => {
      return options.filter(x => x.isActivated === 1);
    }));
  }

  getErrorCodes(lang: string, category?: string): Observable<any> {
    const url = `/api/errorcode/${lang}/${isNullOrEmpty(category) ? '' : category}`;
    return this.http.get(url);
  }

  getSystemParam(paramkey: string, version?: number): Observable<any> {
    const url = `/api/systemparam/${paramkey}/${isNullOrEmpty(version) ? '' : version}`;
    return this.http.get(url);
  }

  getCountry(): Observable<any> {
    const url = `/api/country`;
    return this.http.get(url);
  }

  getCityByCountry(country: string): Observable<any> {
    const url = `/api/city/${country}`;
    return this.http.get(url);
  }

  getAssignmentDistrictBy(facility?: string, country?: string): Observable<any> {
    const url = `/api/assignmentdistrict/${isNullOrEmpty(facility) ? 'X' : facility}/${isNullOrEmpty(country) ? '' : country}`;
    return this.http.get(url);
  }
}
