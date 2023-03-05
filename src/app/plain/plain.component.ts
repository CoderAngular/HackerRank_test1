import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'plain',
  templateUrl: './plain.component.html',
  styleUrls: ['./plain.component.css']
})
export class PlainComponent implements OnInit {
  @Input() plainText!: string;
  @Output() plainTextChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  textChange(e:Object): void{
    this.plainTextChanged.emit(e);
  }

}
