import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private BASE_URI: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private httpClient: HttpClient
  ) {
    this.BASE_URI = environment.apiUrl;
  }


// Api code start

// auth apis

adminLogin(payload: {
  username: string;
  password: string;
}): Observable<any> {
  return this.httpClient.post(`${this.BASE_URI}/auth/signin`, payload);
}


// blog Info apis

    
insertblogInfo(payload: any , data:any): Observable<any> {
  let header = this.initHeaders();
  return this.httpClient.post(`${this.BASE_URI}/api/sports/insertbloginfo`, payload , { headers: header, observe: 'response' as 'body'}).pipe(
    catchError(this.handleError)
  )
}

updateblogInfo(blog_id: any, payload:any , data: {
}): Observable<any> {
  let header = this.initHeaders();
  return this.httpClient.post(`${this.BASE_URI}/api/sports/updatebloginfo`, payload, { params: { blog_id: blog_id }, headers: header, observe: 'response' as 'body'}).pipe(
    catchError(this.handleError)
  )
}


getBlogInfoAll(
  ): Observable<any> {
    return this.httpClient.get(`${this.BASE_URI}/api/sports/getBlogInfoAll`).pipe(
      catchError(this.handleError)
    )
  }

  getBloginfobyid(blog_id: any
    ): Observable<any> {
      return this.httpClient.get(`${this.BASE_URI}/api/sports/getbloginfobyid`, { params: { blog_id: blog_id } }).pipe(
        catchError(this.handleError)
      )
    }

  deleteBlogInfo(blog_id: any , data:any): Observable<any> {
    let header = this.initHeaders();
    return this.httpClient.post(`${this.BASE_URI}/api/sports/deleteBlogInfo`, data.u_info,{ params: { blog_id: blog_id }, headers: header, observe: 'response' as 'body'}).pipe(
      catchError(this.handleError)
    )
  }

  deleteBlogImage(blog_id: any, image_id: any ,data:any): Observable<any> {
    let header = this.initHeaders();
    return this.httpClient.post(`${this.BASE_URI}/api/sports/deleteBlogImage`, data.u_info ,{ params: { blog_id: blog_id, image_id: image_id }, headers: header, observe: 'response' as 'body'}).pipe(
      catchError(this.handleError)
    )
  }


// Travel Info apis

    
  inserttravelInfo(payload: any , data:any): Observable<any> {
    let header = this.initHeaders();
    return this.httpClient.post(`${this.BASE_URI}/api/sports/inserttravelinfo`, payload , { headers: header, observe: 'response' as 'body'}).pipe(
      catchError(this.handleError)
    )
  }

  updateTravelInfo(travel_id: any, payload:any , data: {
  }): Observable<any> {
    let header = this.initHeaders();
    return this.httpClient.post(`${this.BASE_URI}/api/sports/updateTravelInfo`, payload, { params: { travel_id: travel_id }, headers: header, observe: 'response' as 'body'}).pipe(
      catchError(this.handleError)
    )
  }


  gettravelInfoAll(
    ): Observable<any> {
      return this.httpClient.get(`${this.BASE_URI}/api/sports/getTravelInfoAll`).pipe(
        catchError(this.handleError)
      )
    }

    getTravelinfobyid(travel_id: any
      ): Observable<any> {
        return this.httpClient.get(`${this.BASE_URI}/api/sports/getTravelinfobyid`, { params: { travel_id: travel_id } }).pipe(
          catchError(this.handleError)
        )
      }

    deleteTravelInfo(travel_id: any , data:any): Observable<any> {
      let header = this.initHeaders();
      return this.httpClient.post(`${this.BASE_URI}/api/sports/deleteTravelInfo`, data.u_info,{ params: { travel_id: travel_id }, headers: header, observe: 'response' as 'body'}).pipe(
        catchError(this.handleError)
      )
    }

    deleteTravelImage(travel_id: any, image_id: any ,data:any): Observable<any> {
      let header = this.initHeaders();
      return this.httpClient.post(`${this.BASE_URI}/api/sports/deleteTravelImage`, data.u_info ,{ params: { travel_id: travel_id, iid: image_id }, headers: header, observe: 'response' as 'body'}).pipe(
        catchError(this.handleError)
      )
    }


//home crud
gethomeInfoAll(): Observable<any> {
  let header = this.initHeaders();
  return this.httpClient.get(`${this.BASE_URI}/api/home/gethomeInfoAll`, {headers: header, observe: 'response' as 'body'}).pipe(
    catchError(this.handleError)
  )
}
getHomeinfobyid(home_id: any
  ): Observable<any> {
    let header = this.initHeaders();
    return this.httpClient.get(`${this.BASE_URI}/api/home/gethomeinfobyid`, { headers: header, params: { home_id: home_id } }).pipe(
      catchError(this.handleError)
    )
  }
inserthomeInfo(payload: any , data:any): Observable<any> {
  let header = this.initHeaders();
  return this.httpClient.post(`${this.BASE_URI}/api/home/inserthomeinfo`, payload , { headers: header, observe: 'response' as 'body'}).pipe(
    catchError(this.handleError)
  )
}
updateHomeInfo(payload:any): Observable<any> {
  let header = this.initHeaders();
  return this.httpClient.post(`${this.BASE_URI}/api/home/updatehomeInfo`, payload, { headers: header, observe: 'response' as 'body'}).pipe(
    catchError(this.handleError)
  )
}
deleteHomeInfo(home_id: any): Observable<any> {
  let header = this.initHeaders();
  return this.httpClient.delete(`${this.BASE_URI}/api/home/deletehomeInfo`, { params: { home_id: home_id }, headers: header, observe: 'response' as 'body'}).pipe(
    catchError(this.handleError)
  )
}
deleteHomeImage(home_id: any, image_id: any ,data:any): Observable<any> {
  let header = this.initHeaders();
  return this.httpClient.post(`${this.BASE_URI}/api/home/deleteHomeImage`, data.u_info ,{ params: { home_id: home_id, image_id: image_id }, headers: header, observe: 'response' as 'body'}).pipe(
    catchError(this.handleError)
  )
}


  // get user info data  
  
  getUserInfoById(uid: any
    ): Observable<any> {
      return this.httpClient.get(`${this.BASE_URI}/api/users/getuserinfoById`, { params: { uid: uid } }).pipe(
        catchError(this.handleError)
      )
    }
  

// Api code end

private initHeaders() {
  let token: any = localStorage.getItem('auth_token');    
  var headers = new HttpHeaders();

  if (token !== null) {
    headers = headers.append('Authorization', token);
  }

  headers = headers
  .append('Access-Control-Allow-Origin', '*')
  // .append('Content-Type', 'undefined')
  .append('Pragma', 'no-cache')
  .append('charset', 'utf-8')
  
  return headers;
}


  private handleError(error: HttpErrorResponse) {
    let msg = '';
    console.log("-=-=-=handleError", error);
     
    
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      msg = 'An error occurred:', error.error.message;
    } else {
  
    }
    return throwError(msg);
  }
}






