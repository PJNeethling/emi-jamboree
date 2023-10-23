import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';
import { SubmitScoreComponent } from './components/submit-score/submit-score.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardsComponent,
  },
  {
    path: 'submit',
    component: SubmitScoreComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
