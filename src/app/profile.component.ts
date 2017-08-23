import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  { 
  name: string = 'Komang Suhendra Eka';
  email: string = 'IKomangSuhendra.EkaPutra@mitrais.com';

  showMyName(): void {
    alert(this.name);
  }
}
