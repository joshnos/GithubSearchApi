import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
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
    this.getUsers();
  }

  getUsers() {
    this.http.getElement(this.usersUrl).subscribe(data => {
      Object.keys(data).map(key =>{
        let user: User = {
          id: data[key].id,
          name: data[key].login,
          imgUrl: data[key].avatar_url || "assets/images/default.png",
          gitHubUrl: data[key].html_url
        };
        this.users.push(user);
      });
    });
  }

  getMoreUsers(e) {
    let users = "users";
    let lastId = this.users[this.users.length - 1].id;
    this.usersUrl = users + "?since=" + lastId;
    this.getUsers();
  }

}
