// generic-leaderboard.component.ts
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

  ngOnInit() {}

  getRowClass(index: number) {
    if (index === 0) {
      return 'winner';
    } else if (index === 1) {
      return 'second';
    } else if (index === 2) {
      return 'third';
    }
    return '';
  }
}
