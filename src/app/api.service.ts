import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  saveScore(note) {
    return this.http.post(`https://guessfibo.herokuapp.com/api/score`, note);
  }

  getScore(userId) {
    return this.http.get(`https://guessfibo.herokuapp.com/api/score/${userId}`);
  }
}



