import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Score } from 'src/app/models/score';
import { ScoreDialogComponent, ScoreDialogResult } from '../score-dialog/score-dialog.component';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-submit-score',
  templateUrl: './submit-score.component.html',
  styleUrls: ['./submit-score.component.scss']
})
export class SubmitScoreComponent {

  public score: Score | null = null;

  constructor(private dialog: MatDialog, public service: LeaderboardService) {}

  newScore(): void {
    const dialogRef = this.dialog.open(ScoreDialogComponent, {
      width: '270px',
      data: {
        score: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ScoreDialogResult|undefined) => {
        if (!result) {
          return;
        }
        const score: Score = {
          name: result.score.name,
          surname: result.score.surname,
          gameType: "Chess",
          score: result.score.score
        };
        
        this.service.submitScore(score);
        //add error logging
      });
  }
  
}
