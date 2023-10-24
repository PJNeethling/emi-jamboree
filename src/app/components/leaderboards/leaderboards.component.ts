import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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

  public marioLoading = true;
  public dinoLoading = true;
  public beerLoading = true;

  constructor(private service: LeaderboardService) { }

  ngOnInit(): void {
    this.getScores().subscribe(data => {
      this.scores = data;
      this.getMarioScores();
      this.getDinoScores();
      this.getBeerScores();
    });
  }

  private getMarioScores() {
    this.filterScores('mario', (scores) => {
      this.marioScores = scores.sort((a, b) => this.compareMarioScores(a, b));
      this.marioLoading = false;
    });
  }

  private getDinoScores() {
    this.filterScores('dinosaur', (scores) => {
      this.dinoScores = scores.map(score => ({ ...score, score: +score.score })).sort((a, b) => b.score - a.score);
      this.dinoLoading = false;
    });
  }

  private getBeerScores() {
    this.filterScores('beer', (scores) => {
      this.beerScores = scores.map(score => ({ ...score, score: +score.score })).sort((a, b) => b.score - a.score);
      this.beerLoading = false;
    });
  }

  private getScores() {
    return this.service.getScores().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    );
  }

  private filterScores(gameType: string, callback: (scores: Score[]) => void){
    const filteredScores = this.scores.filter(score => score.gameType === gameType);
    callback(filteredScores);
  }

  private compareMarioScores(a: Score, b: Score) {
    const [minA, secA, msecA] = a.score.toString().split('.').map(Number);
    const [minB, secB, msecB] = b.score.toString().split('.').map(Number);
  
    if (minA !== minB) {
      return minA - minB;
    }
  
    if (secA !== secB) {
      return secA - secB;
    }
  
    return msecA - msecB;
  }
}
