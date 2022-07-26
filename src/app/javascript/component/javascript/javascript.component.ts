import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.sass']
})
export class JavascriptComponent implements OnInit {


  introData: any = [];

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/javascript.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
    })
  }


  ngOnInit(): void {

    }











}
