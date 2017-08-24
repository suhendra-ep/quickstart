import { Injectable } from '@angular/core'; 

@Injectable() 
export class CountService {  
   add(a: number, b:number): number { 
      return a + b; 
   } 
}