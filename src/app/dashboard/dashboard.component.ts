import { Component, OnInit } from '@angular/core';
import { Writter } from '../writter';
import { WritterService } from '../writter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  writters: Writter[] = [];

  constructor(private writterService: WritterService) { }

  ngOnInit(): void {
    this.getWritters()
  }

  getWritters(): void {
    this.writterService.getWritters()
      .subscribe(writters => this.writters = writters.slice(1,5));
  }

}
