import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.sass']
})
export class StartupComponent implements OnInit {

  introData: any = [];
  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/intro.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
      //  this.introData =  this.introData.info
      console.log('aaa', this.introData)
    })
  }

  ngOnInit(): void {
  }

}
