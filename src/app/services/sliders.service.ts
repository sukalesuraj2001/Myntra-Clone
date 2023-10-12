import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

getSlider1(){
  
  return this.http.get(`${this.apiUrl}/Slider1`,);



}



}
