import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../models/Repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() repository: Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
