import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BotaoComponent } from "./botao.component"



@NgModule({
    declarations:[
        BotaoComponent,
        CommonModule
    ],

    imports:[
        BotaoComponent,
        CommonModule
    ],
   

    exports:[
        BotaoComponent
    ]
})

export class BotaoModule {

    
}