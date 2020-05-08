import { Component, OnInit } from '@angular/core';
import { Writter } from '../writter';
import { WritterService } from '../writter.service';

@Component({
  selector: 'app-writters',
  templateUrl: './writters.component.html',
  styleUrls: ['./writters.component.css']
})
export class WrittersComponent implements OnInit {

  writters : Writter[];

  constructor(private writterService: WritterService) { }

  ngOnInit() {
    this.getWritters()
  }

  getWritters(): void {
    this.writterService.getWritters()
      .subscribe(writters => this.writters = writters)
  }

  add(name: string): void{
    name = name.trim();
    if (!name) { return; }
    this.writterService.addWritter({ name } as Writter)
      .subscribe(writter => {
        this.writters.push(writter);
      });
  }

  delete(writter: Writter): void {
    this.writters = this.writters.filter(w => w !== writter);
    this.writterService.deleteWritter(writter).subscribe();
  }
}
