import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  users: User[] = [{
    imgUrl: "https://avatars0.githubusercontent.com/u/1?v=4",
    name: "mojombo",
    gitHubUrl: "https://github.com/mojombo"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
