import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models/Repository';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-list-of-repositories',
  templateUrl: './list-of-repositories.component.html',
  styleUrls: ['./list-of-repositories.component.css']
})
export class ListOfRepositoriesComponent implements OnInit {

  repositories: Repository[] = [];
  repositoryUrl = "users/" + this.activatedRoute.snapshot.params.username + "/repos";
  p: number = 1;

  constructor( public http: HttpService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getAllRepositories();
  }

  getAllRepositories() {
    console.log(this.repositoryUrl);
    this.http.getElement(this.repositoryUrl).subscribe(data => {
      Object.keys(data).map(key =>{
        let repository: Repository = {
          id: data[key].id,
          name: data[key].name,
          description: data[key].description || "",
          gitHubUrl: data[key].html_url,
          issues: data[key].open_issues_count,
          openIssues: data[key].open_issues,
          forks: data[key].forks
        };
        this.repositories.push(repository);
      });
    });
  }

}
