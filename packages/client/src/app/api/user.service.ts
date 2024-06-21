import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Promise<any> {
    return lastValueFrom(this.http.get<any>(this.apiUrl));
  }

  // ใส่ Promise กับ lastValueFrom
  getUserById(id: string): Promise<any> {
    return lastValueFrom(this.http.get<any>(`${this.apiUrl}/${id}`));
  }

  createUser(user: any): Promise<any> {
    return lastValueFrom(this.http.post<any>(this.apiUrl, user));
  }

  updateUser(id: string, user: any): Promise<any> {
    return lastValueFrom(this.http.put<any>(`${this.apiUrl}/${id}`, user));
  }

  deleteUser(id: string): Promise<any> {
    return lastValueFrom(this.http.delete<any>(`${this.apiUrl}/${id}`));
  }
}
