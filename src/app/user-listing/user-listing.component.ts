import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';

import { User } from '../model/user'

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  constructor(
    private userService: UserProfileService
    ) { 
      
    }

  users: User[]

  ngOnInit() {
    this.loadUsers();
  }

  // private loadUsers() {
  //   this.userService.getUsers().subscribe(
  //     data => { this.users = data },
  //     err => console.error(err),
  //     () => console.log("users loaded.")
  //   );
  // }

  private loadUsers(){
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data
        console.log(this.users)
        console.log('Type of TestArray: ', isArray(this.users))
      function isArray(testArray) {
        return testArray instanceof Array;
    }
      },
      err => console.log(err)
    )
  }
  

  deleteUser(userEmail: string) {
    this.userService.deleteUser(userEmail).subscribe(() => {
      this.loadUsers();
    });
  }


  isArrayInstanceOf(testArray) {
    // return testArray instanceof Array;
    console.log(testArray)
}

}
