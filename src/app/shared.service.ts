import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getData(data: any) {
    if (1 == 1) {
      data = 'Angular';
      return data;
    } else {
      data = "Node";
      return data;
    }
  }
}