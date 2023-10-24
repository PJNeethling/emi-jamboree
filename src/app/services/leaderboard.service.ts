import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Score } from '../models/score';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private dbPath = 'scores';

  scoresRef: AngularFirestoreCollection<Score>;

  constructor(private db: AngularFirestore) {
    this.scoresRef = db.collection(this.dbPath);
  }

  getScores() {
    return this.scoresRef;

  }

  submitScore(score: any) {
    return this.scoresRef.add({ ...score })
      .then(() => {
        // Score submitted successfully
      })
      .catch((error) => {
        console.error('Error submitting score:', error);
        throw error; // Rethrow the error after logging
      });
  }
  
}
