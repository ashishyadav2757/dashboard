import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.sass']
})
export class TypescriptComponent implements OnInit {


  introData: any = [];

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/typescript.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
      //  this.introData =  this.introData.info
      console.log('aaa', this.introData)
    })
  }


  ngOnInit(): void {
    // Demo 1: Console in ts
    const message: string = "Hello i am console"
    console.warn('demo1', 'Demo1', message)

    // Demo 2: Condition in ts
    let ab: any;
    let a: number = 30, b = 20;
    if (ab = a > b ? "true part" : "false part") {
      console.log('demo2', ab)
    }
    // used ternaly opertor

    // Demo 3: normal loop for loop
    for (let i = 0; i < 10; i++) {
      console.log('demo3', 'loop value' + i)
    }

    // Demo 4: For of loop
    let fruites = ['apple', 'banana', 'papaya'];

    for (let fruitsList of fruites) {
      console.log('Demo 4', fruitsList)
    }
    // Demo 5: For in loop
    for (let fruitsList in fruites) {
      console.log('Demo 5', fruites[fruitsList])
    }
    // Demo 6: For in loop
    // while(condition){
    //   block of code

    //   increment/decrement

    // }

    // Demo 7: Simple function
    //pass parameter with data type
    function meet(message: string, name?: string): string { //pass datatype return // by ? sign youcan pass parameter optional
      return message + '' + name;
    }

    // you can provide default parameter also
    function meet1(message: string, name: string = "ashish"): string {
      return message + '' + name;
    }
    meet('hi', 'ashish'); //pass arguments


    // Demo 8: interface

    interface mydetails { // this is interface ,it is rules for data
      name: string,
      age: number
    }

    //  class myname implements mydetails{ // when implemet interface myname show error because we decler two propertynot there

    //  }

    // extended interface
    interface myname extends mydetails {
    }

    // Demo 9: Class in ts

    // class details {
    //   name: string;
    //   constructor() {

    //   }
    //   mydetails() {
    //   }
    // }

    // Demo 9a: constructor : when you create a object in class Initialie a constructor

    // class details {
    //   Name: string;
    //   constructor(name: string) {
    //     this.Name = name;
    //   }
    //   mydetails() {
    //   }
    // }

    // Demo 9b: Interface implement in class:

    interface person {
      name: string;
      mydetails(): void;
    }
    interface personDestails {
      pesrsonCode: number;
    }

    class details implements person, personDestails {
      name: string;
      pesrsonCode: number;
      constructor(name: string, pesrsonCode: number) {
        this.name = name;
        this.pesrsonCode = pesrsonCode;

      }
      mydetails() {

      }
    }









  }


}
