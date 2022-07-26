import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.sass']
})
export class LinksComponent implements OnInit {

  introData: any = [];

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/tech-info.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
      //  this.introData =  this.introData.info
      console.log('aaa', this.introData)
    })
  }


  ngOnInit(): void {
  }

}
