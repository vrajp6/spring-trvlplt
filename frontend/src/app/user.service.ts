import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }
}