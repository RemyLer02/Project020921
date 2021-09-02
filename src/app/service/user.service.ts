import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: User[] = [];

  constructor() { }

  addUser(user: User): void{
    this._users.push(user);
  }

  removeUser(userId: string) {
    const index = this._users.findIndex(u => u.id == userId);
    if(index !== -1) {
      this._users.splice(index,1);
    }
  }

  updateUser(user: User){
    const index = this._users.findIndex(u => u.id == userId);
    if(index !== -1) {
      this._users.splice(index,1);

  }

  getAll() : User[]{
    return this._users;
  }
}
