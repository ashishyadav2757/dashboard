import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.sass']
})
export class PasswordManagerComponent implements OnInit {


  introData: any = [];

  constructor(private _http: HttpClient) {
    this._http.get('assets/json/angular/password.json').subscribe(data => {
      this.introData = data
      this.introData = this.introData.intro;
      //  this.introData =  this.introData.info
      console.log('aaa', this.introData)
    })
  }

  ngOnInit(): void {
  }

}
