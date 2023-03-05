import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.css']
})
export class CipherComponent implements OnInit {
  @Input() encryptedText!: string
  @Output() encryptTextChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  textChange(e:Object): void{
    this.encryptTextChanged.emit(e);
  }

}
