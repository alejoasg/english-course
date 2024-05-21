import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private name : string = "";
  private dni : string = "";
  private userData: BehaviorSubject<{ name: string, dni: string }> = new BehaviorSubject<{ name: string, dni: string }>({ name: this.name, dni: this.dni });
  userData$: Observable<{ name: string, dni: string }> = this.userData.asObservable();
  constructor() { }

 setName(name: string): void {
  const dni = this.dni;
  setTimeout(() => {
    this.userData.next({ name, dni })
  }, 3000); 
}

getUserData(): Observable<{ name: string, dni: string }>{

    return new Observable<{ name: string, dni: string }>(  observer => {
      setTimeout(() => {
        observer.next(this.userData.getValue());
        observer.complete();
      }, 1000); 
  })
  }

setUserData( name: string, dni: string ): void {
   
    setTimeout(() => {
      this.userData.next({ name, dni });
    }, 1000); 
}

  
}
