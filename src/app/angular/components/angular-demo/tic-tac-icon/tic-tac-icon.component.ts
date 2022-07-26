import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { svgList } from '../utils/svg';

@Component({
  selector: 'app-tic-tac-icon',
  templateUrl: './tic-tac-icon.component.html',
  styleUrls: ['./tic-tac-icon.component.sass']
})
export class TicTacIconComponent implements OnInit {
  @Input() iconName:any;
  constructor(private _Sanitizer:DomSanitizer) { }

  svgIcon = {
    "cross":this._Sanitizer.bypassSecurityTrustHtml(svgList['cross']),
    "circle":this._Sanitizer.bypassSecurityTrustHtml(svgList['circle']),
    "pencil":this._Sanitizer.bypassSecurityTrustHtml(svgList['pencil']),
  }
  ngOnInit(): void {
    console.log('input',this.iconName)
  }

}
