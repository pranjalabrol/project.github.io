import { ValueConverter } from '@angular/compiler/src/render3/view/template';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }
  text!: any;


  onUpperCase() {

    this.text = this.text.toUpperCase()
  }

  onLowerCase() {

    this.text = this.text.toLowerCase()
  }

  onClearCase() {
    this.text='';

  }
  removeSpaces(){
    let spacee =this.text.split(/[ ]+/);
    this.text= spacee.join(" ")
  }

  ngOnInit(): void {
  }

}
