import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel, UserModelFull} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8081/api/users' // TODO: Move to env
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<UserModelFull[]>(`${this.url}/all`);
  }

  addUser(newUser: UserModel){
    return this.http.post<UserModelFull>(`${this.url}/add`, {user: newUser});
  }

  updateUser(updatedUser: UserModelFull){
    return this.http.put<UserModelFull>(`${this.url}/update`, {user: updatedUser});
  }

  deleteOneUser( id: number) {
    return this.http.delete(`${this.url}/delete/${id}`)
  }
}
