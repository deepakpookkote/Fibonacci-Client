import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  saveScore(note) {
    return this.http.post(`http://localhost:3030/api/score`, note);
  }

  getScore(userId) {
    return this.http.get(`http://localhost:3030/api/score/${userId}`);
  }
}



