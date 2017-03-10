import {NgModule} from "@angular/core";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { SharedModuleExample } from '../shared/shared.module';

@NgModule({
 declarations: [ 
   ShoppingListComponent,
   ShoppingListAddComponent
 ],
  imports: [
    FormsModule,
    SharedModuleExample  // almost the same as BrowserModule but can't use BrowserModule again only in 
                 // the AppModule
  ]
})
export class ShoppingListModule{}