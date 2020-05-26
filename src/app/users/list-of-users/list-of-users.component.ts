import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  users: User[] = [];
  usersUrl = "users";

  constructor(public http: HttpService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.getElement(this.usersUrl).subscribe(data => {
      Object.keys(data).map(key =>{
        let user: User = {
          name: data[key].login,
          imgUrl: data[key].avatar_url || "assets/images/default.png",
          gitHubUrl: data[key].html_url
        };
        this.users.push(user);
      });
    });
  }

}
