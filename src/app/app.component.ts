import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caesar_cipher';
  shiftValue: number = 0;
  selectOptions = [0,1,2,3,4,5,6,7,8,9,10];
  plainText: string = '';
  encryptedText: string = '';

  onChange(e: any){
    this.shiftValue = parseInt(e.target.value);
    this.plainText = this.encryptedText = '';
  }

  onPlainTextChange(text:any){
    this.encryptedText = this.encode(text.target.value);
  }

  onEncrptTextChange(text:any){
    this.plainText = this.decode(text.target.value);
  }

  encode(text:any){
    let encodedText: any = '';
    let rawText = [...text];
    encodedText = rawText.map(char => {
      if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
        let newChar = char.charCodeAt() + this.shiftValue;
        let newCharBase = newChar - 65;
        let modVal = (newCharBase%26) + 65;
         return String.fromCharCode(modVal);
      }
      else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
        let newChar = char.charCodeAt() + this.shiftValue;
        let newCharBase = newChar - 97;
        let modVal = (newCharBase%26) + 97;
         return String.fromCharCode(modVal);
      }
      else{
        return char;
      }
    })
    return encodedText.join('').toString();
  }

  decode(text:any){
    let decodedText: any = '';
    let rawText = [...text];
    decodedText = rawText.map(char => {
      if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
        let newChar = char.charCodeAt() - this.shiftValue;
        let newCharBase = Math.abs(newChar - 90);
        let modVal = 90 - (newCharBase%26);
         return String.fromCharCode(modVal);
      }
      else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
        let newChar = char.charCodeAt() - this.shiftValue;
        let newCharBase = Math.abs(newChar - 122);
        let modVal = 122 - (newCharBase%26);
         return String.fromCharCode(modVal);
      }
      else{
        return char;
      }
    })
    return decodedText.join('').toString();
  }

}
