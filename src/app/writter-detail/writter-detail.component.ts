import { Component, OnInit, Input } from '@angular/core';
import { Writter } from '../writter';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WritterService } from '../writter.service';

@Component({
  selector: 'app-writter-detail',
  templateUrl: './writter-detail.component.html',
  styleUrls: ['./writter-detail.component.css']
})
export class WritterDetailComponent implements OnInit {

  writter: Writter;

  constructor(
    private route: ActivatedRoute,
    private writterService: WritterService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getWritter();
  }

  getWritter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.writterService.getWritter(id)
      .subscribe(writter => this.writter = writter);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void {
    this.writterService.updateWritter(this.writter)
    .subscribe(
      () => this.goBack()
    );
  }
}
