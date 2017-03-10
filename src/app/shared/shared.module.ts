import { NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule ({
   // imports:[CommonModule],  //don't really have to import this as we aren't using it in the 
                             //SharedModuleExample class
    exports:[CommonModule]
})
export class SharedModuleExample{};