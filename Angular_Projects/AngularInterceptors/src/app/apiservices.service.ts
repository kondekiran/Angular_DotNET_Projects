import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class APIServicesService {

  constructor(
    private http:HttpClient
  ) { }

  getProducts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      console.log(data);
    })
  }
  

}
