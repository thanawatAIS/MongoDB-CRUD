// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'ex1-mongo';
  
// }

// import { Component, OnInit } from '@angular/core';
// import { UserService } from './api/user.service';
// import { RouterOutlet } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [HttpClientModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   providers: [UserService]
// })
// export class AppComponent implements OnInit {
//   constructor(private userService: UserService) {}

//   users: any[] = [];
//   ngOnInit(): void {
//     this.userService.getUsers().then(
//       (data) => {
//         this.users = data;
//       }
//     );
//   }
// }

import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit } from '@angular/core';
import { UserService } from './api/user.service';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit, AfterViewInit {
  users: any[] = [];

  

  @ViewChild('userContainer', { read: ViewContainerRef }) userContainer!: ViewContainerRef;
  @ViewChild('userTemplate') userTemplate!: TemplateRef<any>;

  constructor(private userService: UserService) {}


  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    acceptTerms: false
  };
  formVisible = false;

  onSubmit() {
    // Handle form submission
    console.log('Form submitted', this.form);
  }

  onReset(form: any) {
    form.reset();
  }

  toggleFormVisibility() {
    this.formVisible = !this.formVisible;
  }


  ngOnInit(): void {
    this.userService.getUsers().then(data => {
      this.users = data;
      this.renderUsers();
    });
  }

  ngAfterViewInit() {
    // If users are already loaded by the time this runs, render them
    if (this.users.length) {
      this.renderUsers();
    }
  }

  renderUsers() {
    this.users.forEach((user, index) => {
      this.userContainer.createEmbeddedView(this.userTemplate, {
        $implicit: user,
        index: index
      });
    });
  }
}




