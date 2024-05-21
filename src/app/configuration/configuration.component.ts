import { Component } from '@angular/core';
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  dni:string= "";
  name: string = "";

  constructor(private userService: UserServiceService) {}

  onInputDniChange( event : Event ){
   const inputDNI = event.target as HTMLInputElement;
   this.dni = inputDNI.value;
  }

  onInputNameChange( event : Event ){
    const inputName = event.target as HTMLInputElement;
    this.name = inputName.value;
   }

   onCancel() {

    
  }
  onSave() {
    this.userService.setUserData(this.name, this.dni);
  }

}
