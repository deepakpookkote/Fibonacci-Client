import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: any = '';
  gameStarted = false;
  roundCounter = 0;
  totalPoints = 0;
  showResult = false;
  showTotalPoints = false;
  finalScore: any;
  scoreData: any;

  fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  constructor(private apiService: ApiService) { }

  startGame() {
    setTimeout(() => {
      this.gameStarted = true;
    }, 2000);
  }

  findRandomSeries() {
    this.roundCounter = (this.roundCounter < 6) ? this.roundCounter + 1 : 0;
    const selectedFibonacci = this.fibonacciArray[(Math.random() * this.fibonacciArray.length) | 0];
    if (this.roundCounter === 1) {
      if (selectedFibonacci === 1) {
        this.totalPoints = this.totalPoints + 1;
      } else {
        this.totalPoints = this.totalPoints - 1;
      }
    }
    if (this.roundCounter === 2) {
      if (selectedFibonacci === 1) {
        this.totalPoints = this.totalPoints + 1;
      } else {
        this.totalPoints = this.totalPoints - 1;
      }
    }
    if (this.roundCounter === 3) {
      if (selectedFibonacci === 1) {
        this.totalPoints = this.totalPoints + 1;
      } else {
        this.totalPoints = this.totalPoints - 1;
      }
    }
    if (this.roundCounter === 4) {
      if (selectedFibonacci === 2) {
        this.totalPoints = this.totalPoints + 1;
      } else {
        this.totalPoints = this.totalPoints - 1;
      }
    }
    if (this.roundCounter === 5) {
      if (selectedFibonacci === 3) {
        this.totalPoints = this.totalPoints + 1;
      } else {
        this.totalPoints = this.totalPoints - 1;
      }
    }
    if (this.roundCounter === 6) {
      if (selectedFibonacci === 5) {
        this.totalPoints = this.totalPoints + 1;
      } else {
        this.totalPoints = this.totalPoints - 1;
      }
      this.postResults();
      this.showResult = true;
    }
  }

  getRandomColor2() {
    let length = 6;
    let chars = '0123456789ABCDEF';
    let hex = '#';
    while (length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }

  getRandomColor() {
    let color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  displayResult() {
    this.apiService.getScore(this.scoreData._id).subscribe(data => {
      this.finalScore = data['user']['score'];
      this.showTotalPoints = true;
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }, error => {
      console.log('fetching the scores failed');
    });
  }

  postResults() {
    const ScoreData = {
      name: this.userName,
      score: this.totalPoints
    };
    this.apiService.saveScore(ScoreData).subscribe(data => {
      console.log('submission succees', data);
      this.scoreData = data['score'];
    }, error => {
      console.log('score submission failed');
    });
  }
}
