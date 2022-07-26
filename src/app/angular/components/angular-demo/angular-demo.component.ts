import { Component, OnInit, Sanitizer } from '@angular/core';
import arrayWord from './utils/word';
import country from './utils/country';


// this is decorator it is acept object
@Component({
  selector: 'app-angular-demo',
  templateUrl: './angular-demo.component.html',
  styleUrls: ['./angular-demo.component.sass']
})
export class AngularDemoComponent implements OnInit {
  //############################################## tic toc

  winMessage: string = '';
  isCross: any = false;
  itemArray: string[] = new Array(9).fill('empty');
  constructor() {

  }
  handelCLick = (itemNumber: any) => {
    console.log(this.winMessage)
    if (this.winMessage) {
      alert(this.winMessage)
    }
    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
    }
    else {
      alert('all ready filled')
    }
    this.checkisWinner();
  }
  checkisWinner = () => {
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'

    ) {
      this.winMessage = `${this.itemArray[0]} won`
    }
    else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`

    }
    else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`

    }

    else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`

    }
    else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`

    }
    else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`

    }

    else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`

    }
    else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`

    }

  }
  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty')
  }

  //############################################## Counter APP
  counter: number = 0;
  increase() {
    if (this.counter < 10) {
      this.counter = this.counter + 1;
    }
  }
  decrease() {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }
  reset() {
    this.counter = 0;
  }

  // #######################################################  word Generate
  words = '';
  wordLimit = 10;
  getValue: any;
  wordLimitRange(newLimit: any) {
    this.getValue = newLimit.target.value
    console.log('aaaaaa', newLimit)
    this.wordLimit = this.getValue;
  }
  generateWord() {
    this.words = arrayWord.slice(0, this.wordLimit).join(' ');
  }
  // ############################################Generate random country

  countryCount: number = 10;
  generatedCountry = ''

  countryTarget: any;


  count(countNumber: any) {
    this.countryTarget = countNumber.value
    this.countryCount = this.countryTarget;

  }

  countryList() {
    this.generatedCountry = country.slice(0, this.countryCount).join(' ');
  }
  random() {
    let x = Math.floor((Math.random() * 10) + 1);
    this.generatedCountry = country.slice(0, x).join(' ');


  }


  ngOnInit(): void {
  }

}
