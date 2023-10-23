import { Component, Input, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';

@Component({
  selector: 'app-generic-leaderboard',
  templateUrl: './generic-leaderboard.component.html',
  styleUrls: ['./generic-leaderboard.component.scss']
})
export class GenericLeaderboardComponent implements OnInit {

  @Input() scores!: Score[];
  
  displayedColumns: string[] = ['name', 'surname', 'score'];
    
  constructor() {}

	ngOnInit() {

	}
}
