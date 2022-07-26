import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.sass']
})
export class JavaComponent implements OnInit {


  introData: any = [];

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/java.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
    })
  }


  ngOnInit(): void {

    }











}
