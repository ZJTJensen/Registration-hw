import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subit=false;
  counter=-1;
  title = 'app';
  user = new User();
  users = [];
  onSubmit(){
    this.counter +=1;
    this.users.push(this.user);
    this.user = new User();
    this.subit = true;
  }
  clearMessage(){
    this.subit=false;
  }
}

