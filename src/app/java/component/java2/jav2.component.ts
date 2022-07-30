import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-java2',
  templateUrl: './java2.component.html',
  styleUrls: ['./java2.component.sass']
})
export class Java2Component implements OnInit {


  introData: any = [];

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/java2.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
    })
  }


  ngOnInit(): void {

    }











}
