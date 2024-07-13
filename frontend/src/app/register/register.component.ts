import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = { username: '', password: '', email: '' };

  constructor(private userService: UserService) { }

  register(): void {
    this.userService.register(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
      },
      error => {
        console.error('There was an error during the registration process', error);
      }
    );
  }
}

