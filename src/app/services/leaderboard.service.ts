import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor() { }

  getScores(): Observable<Score[]> {

    //change this to get firestore scores
    var test = [
      {name: 'PJ', surname: 'Neethling', gameType: 'mario', score: '1.3'},
      {name: 'PJ2', surname: 'Neethling2', gameType: 'mario', score: '1.4'},
      {name: 'PJ3', surname: 'Neethling3', gameType: 'mario', score: '1.5'},
      {name: 'PJ4', surname: 'Neethling4', gameType: 'mario', score: '1.6'},
      {name: 'PJ5', surname: 'Neethling5', gameType: 'mario', score: '1.7'},
      {name: 'PJ6', surname: 'Neethling6', gameType: 'mario', score: '1.8'},
      {name: 'Stuart', surname: 'aaa', gameType: 'dino', score: '1.3'},
      {name: 'test', surname: 'awdaw', gameType: 'dino', score: '1.4'},
      {name: 'awdaw', surname: 'adwadad', gameType: 'beer', score: '1.3'},
      {name: 'awdwa', surname: 'awdawdawd', gameType: 'beer', score: '1.4'}
    ];

    return of(test);
  }

  submitScore(score: any) {
    var test = [
      {name: 'PJ', surname: 'Neethling', gameType: 'mario', score: '1.3'}
    ];

    return of(test);
  }
}
