import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ApiResponse {
  users: any[];
}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Promise<any[]> {
    return this.http.get<ApiResponse>('https://dummyjson.com/users')
      .toPromise()
      .then(item => item?.users)
      .catch(error => error)
  }
}
