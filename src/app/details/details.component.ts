import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { DataModel, RootObject } from '../data.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: DataModel;

  constructor(private route: ActivatedRoute,
              private data: DataService) {
    this.route.params.subscribe(
      params => this.user = params.id
    );
  }

  ngOnInit() {
    this.data.getUser(this.user).subscribe(
      data => { this.user = data;
        console.log(data); },
    );
  }

}
