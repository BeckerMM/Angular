import { BrowserModule } from '@angular/platform-browser';
import { NgModule , EventEmitter} from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoModule } from './botao/botao.module';

@NgModule({
  declarations: [
    AppComponent,
    BotaoModule
  ],
  imports: [
    BrowserModule,
    BotaoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


  }

