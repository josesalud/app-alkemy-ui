import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TaskResponse } from '../responses/task-response';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  API_URL = environment.apiUrl.concat('/users');

  constructor(private http: HttpClient, private router: Router) {}

  getAll():Observable<TaskResponse> {
    return this.http.get<any>(this.API_URL);
  }

}
