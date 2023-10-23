import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Score } from '../../models/score';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.scss'],
})
export class ScoreDialogComponent {
  private backupScore: Partial<Score> = { ...this.data.score };

  constructor(
    public dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScoreDialogData
  ) {

  }

  cancel(): void {
    this.data.score.name = this.backupScore.name;
    this.data.score.surname = this.backupScore.surname;
    this.dialogRef.close(this.data);
  }
}

export interface ScoreDialogData {
  score: Partial<Score>;
  enableDelete: boolean;
}

export interface ScoreDialogResult {
  score: Score;
  delete?: boolean;
}