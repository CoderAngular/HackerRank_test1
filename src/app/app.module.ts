import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlainComponent } from './plain/plain.component';
import { CipherComponent } from './cipher/cipher.component';

@NgModule({
  declarations: [
    AppComponent,
    PlainComponent,
    CipherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
