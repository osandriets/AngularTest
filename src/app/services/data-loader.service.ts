import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Category, EnquiryTypes, ErrorExtend} from './data.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataLoaderService {
  static TOKEN = 'token';

  constructor(private http: Http) {
  }

  loginToServer(username = 'test@abz.agency', password = '123456'): Observable<any> {
    const requestOptions = new RequestOptions();
    requestOptions.headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      }
    );

    const body = {email: username, password: password};
    const url = `${environment.apiUrl}${environment.login}`;

    return this.http.post(url, body, requestOptions).map(
      (data) => {
        const loginData = data.json();
        if (loginData.success === true) {
          localStorage.setItem(DataLoaderService.TOKEN, loginData.data.token);
        }
      }
    ).catch(
      (error) => {
        const errorDesc = error.json();
        return Observable.throw(new ErrorExtend(errorDesc.error, error.status));
      }
    );
  }

  getData(dataCallBack: () => Observable<any>): Observable<any> {
    if (localStorage.getItem(DataLoaderService.TOKEN)) {
      return <any>dataCallBack().catch(
        (error) => {
          if (error.status === 401) {
            return this.loginToServer().flatMap(
              () => {
                return dataCallBack();
              }
            );
          } else {
            return Observable.throw(error);
          }
        }
      );
    } else {
      return this.loginToServer().flatMap(
        () => {
          return dataCallBack();
        }
      );
    }
  }

  _getEnquiryTypes(): Observable<any> {
    const token = localStorage.getItem(DataLoaderService.TOKEN);

    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': token,
      }
    );
    const options = new RequestOptions({headers: headers});
    const url = `${environment.apiUrl}${environment.entry_types}`;

    return this.http.get(url, options).map(
      (data) => {
        const categoriesData = data.json();
        const categoriesArray = [];
        if (categoriesData.success === true) {
          for (const i of categoriesData.data) {
            categoriesArray.push(new EnquiryTypes(i));
          }
        }
        return categoriesArray;
      }
    ).catch((error) => {
      const errorDesc = error.json();
      return Observable.throw(new ErrorExtend(errorDesc.error, error.status));
    });
  }

  _getCategories(): Observable<any> {
    const token = localStorage.getItem(DataLoaderService.TOKEN);

    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': token,
      }
    );
    const options = new RequestOptions({headers: headers});
    const url = `${environment.apiUrl}${environment.categories}`;

    return this.http.get(url, options).map(
      (data) => {
        const categoriesData = data.json();
        const categoriesArray = [];
        if (categoriesData.success === true) {
          for (const i of categoriesData.data) {
            categoriesArray.push(new Category(i));
          }
        }
        return categoriesArray;
      }
    ).catch((error) => {
      const errorDesc = error.json();
      return Observable.throw(new ErrorExtend(errorDesc.error, error.status));
    });
  }

  sendData(dataToSend: {
    department: number; file: any; description: string;
    email: string; enquiry_type: string; subject: string; user_name: string
  }) {

    const token = localStorage.getItem(DataLoaderService.TOKEN);

    const input = new FormData();

    if (dataToSend.file) {
      input.append('file', dataToSend.file);
    }

    input.append('department', String(dataToSend.department));
    input.append('description', dataToSend.description);

    input.append('email', dataToSend.email);
    input.append('enquiry_type', dataToSend.enquiry_type);
    input.append('subject', dataToSend.subject);
    input.append('user_name', dataToSend.user_name);

    const headers = new Headers(
      {
        'Accept': '*/*',
        'Authorization': token,
      }
    );

    const url = `${environment.apiUrl}${environment.support}`;

    const options = new RequestOptions({headers: headers});
    options.body = input;
    options.url = url;
    options.method = RequestMethod.Post;

    return this.http.post(url, input, options).catch(
      (error) => {
        const errorDesc = error.json();
        return Observable.throw(new ErrorExtend(errorDesc.error, error.status));
      });
  }
}
