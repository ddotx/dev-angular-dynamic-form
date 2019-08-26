import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserProfileService } from '../services/user-profile.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userAddForm: FormGroup
  user: User;

  constructor(private userService: UserProfileService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userAddForm = this.fb.group({
      name: ['test'],
      organization: ['test']
    })
  }

  // saveUser() {
  //   this.userService.addUser(this.userAddForm).toPromise().then(() => {
  //     // console.log(this.userAddForm);
  //     this.router.navigate(['user']);
  //   });
  // }

saveUser(){
  console.log(this.userAddForm.value)
  this.userService.saveUser(this.userAddForm.value)
}

  save() {
    console.log(this.userAddForm);
    // console.log('Saved: ' + JSON.stringify(this.userAddForm.value));
  }
}
