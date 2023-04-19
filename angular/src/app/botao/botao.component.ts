import { Component, Output ,EventEmitter} from "@angular/core";

@Component({
  selector: 'botao-personalizado',
  templateUrl:'./botao.component.html',
  styleUrls:['./botao.component.css']
    
})

export class BotaoComponent{
    onMouseHover():void {
        console.log("mouse hover");
      }

}