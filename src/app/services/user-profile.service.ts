import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators';

import { User } from '../model/user'

//TODO === API Gateway Resource URL 
const API_URL: string = 'https://epufhco5xd.execute-api.ap-southeast-1.amazonaws.com/Dev/user';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  constructor(private http: HttpClient) { }

  // getAllUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(API_URL)
  // }

  getAllUsers() {
    return this.http.get(API_URL)
      .pipe(
        map((users: Array<any>) => {
          let userMap: User[] = [];
          users && users.forEach((user) => {
            userMap.push({
              name: user['name'],
              organization: user['organization'],
              contact: user['contact'],
              // type: user.contact['type'],
              // label: user.contact['label'],
              // value: user.contact['value']
            });
          });
          return userMap;
        })
      )
  }

  deleteUser(userEmail: string, ) {
    return this.http.delete(API_URL,
      {
        params: {
          "email": userEmail
        }
      });
  }

  saveUser(userAddForm) {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // let options = { headers: headers };
    return this.http.post(API_URL, userAddForm);
    // return console.log(userAddForm)
    
  }

  // addUser(userAddForm: User): Observable<User> {
  //   return this.http.post(API_URL, userAddForm, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   });
  // }

  onSubmit(userAddForm){
      this.http.post(API_URL, userAddForm.value)
      .subscribe((response)=>{
        console.log('repsonse ',response);
      })
    
  }
}
