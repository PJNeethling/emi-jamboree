import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {
  public marioScores!: Score[];
  public dinoScores!: Score[];
  public beerScores!: Score[];
  public scores!: Score[];

  constructor(private service: LeaderboardService) { }

  ngOnInit(): void {
    this.getScores();
    
    this.getMarioScores();
    this.getDinoScores();
    this.getBeerScores();
  }

  private getMarioScores() {
    this.filterScores(this.scores, 'mario');
  }

  private getDinoScores() {
    this.filterScores(this.scores, 'dino');
  }

  private getBeerScores() {
    this.filterScores(this.scores, 'beer');
  }

  private getScores() {
    this.service.getScores().subscribe(scores => {
      this.scores = scores;
    });
  }

  private filterScores(scores: Score[], gameType: string){
    if (gameType === 'mario') {
      this.marioScores = scores.filter(score => score.gameType === 'mario');
    } else if (gameType === 'dino') {
      this.dinoScores = scores.filter(score => score.gameType === 'dino');
    } else if (gameType === 'beer') {
      this.beerScores = scores.filter(score => score.gameType === 'beer');
    }
  }
}
