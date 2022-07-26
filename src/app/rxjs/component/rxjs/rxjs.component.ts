import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, from } from 'rxjs';
import { scan } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.sass']
})
export class RxjsComponent implements OnInit {
  introData: any = [];
  unsubscribe:any;

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/rxjs.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
      //  this.introData =  this.introData.info
      console.log('aaa', this.introData)
    })
  }

  ngOnInit(): void {
    // demo 1 pipe and opertor
    // like javascript doucment click lisner infite time
    document.addEventListener('click', () => {
      console.log('doucument clicked')
    })
    // Rx js

    // 1- import {fromEvent } from 'rxjs';
    // import { scan } from 'rxjs/operators'; by opertor check how many time clicked

    fromEvent(document, 'click')
      .pipe(scan(countVar => countVar + 1, 0)) // counterVar avarible for how many type clicked on document
      .subscribe(
        (countVar) => console.log(`click at ${countVar}`)
      )


    // demo 2
    const subscriber = new Observable(val => {
      val.next(1);
      val.next(2);
      val.next(3);
      setTimeout(() => {
        val.next(4);
        val.complete()
      }, 2000);
    })

    subscriber.subscribe({
      next(x) { console.log('we got ' + x) },
      error(err) { console.log('error is ' + err) },
      complete() { console.log('completed') },

    });
    // demo 3

    // Suscribe and unscribe
    const observabl = from([10, 20, 30, 40]);

    const Suscribe = observabl.subscribe(x => console.log(x))

    Suscribe.unsubscribe();
  }

  // demo 4
  // pipe and opertor
}
