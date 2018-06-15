import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataModel, RootObject } from '../data.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: RootObject;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }

}
