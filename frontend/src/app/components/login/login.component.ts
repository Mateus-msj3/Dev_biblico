import { Role } from './../../shared/models/role';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username?: string;

  password?: string;

  email?: string;

  role?: Role = new Role(1);

  loginError?: boolean;

  loginSucess?: string;

  signing?: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.router.navigate(['/home']);
    console.log(`User: ${this.username}, Password: ${this.password}`)

  }

  prepareSigning(event: any) {

    event.preventDefault();
    this.signing = true;

  }

  cancelSigning(event: any) {

    this.signing = false;

  }

  register() {

    const user: User = new User();
    user.username = this.username;
    user.email = this.email;
    user.password = this.password;
    user.role = this.role

    this.authService.save(user).subscribe(response => {
      console.log('Sucesso');
      this.loginSucess = 'Cadastro realizado com sucesso! Efetue o login.';
      this.loginError = false;
    }, error => {
      console.log("Erro: " + error);
      this.loginError = true;
      this.loginSucess = '';
    })

  }


}
