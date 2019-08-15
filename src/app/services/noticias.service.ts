import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines() {
    return this.http.get<RespuestaTopHeadLines>
      (`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e26c007e97b244a0b7e90c1c2d64e05b`);
  }
}
