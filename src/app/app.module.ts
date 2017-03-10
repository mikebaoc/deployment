import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { ReactiveFormsModule } from '@angular/forms'; only used by  recipes

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';


//import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
//import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
//import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
//import { ShoppingListComponent } from './shopping-list/shopping-list.component';
//import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
//import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {routing} from "./app.routing";
//import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
//import { RecipeStartComponent } from './recipes/recipe-start.component';

import { ShoppingListModule } from './shopping-list/shopping-list-module';

//import { RecipesModule } from './recipes/recipes-module';

import {CoreModule} from './core.module';

//import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  //  ShoppingListComponent,
  //  ShoppingListAddComponent,


 //   DropdownDirective,  //in CoreModule
 // HomeComponent // in CoreModule


//    RecipeEditComponent,
//    RecipeStartComponent

  ],
  imports: [
    BrowserModule,

   // FormsModule,  only used in shopping module
    ShoppingListModule,
  //  RecipesModule,
  CoreModule,
    HttpModule,
    routing
  ],
  providers: [ShoppingListService,RecipeService], //<-- leaving ShoppingListService because we want to inject the single instance everywhere within  the application
  bootstrap: [AppComponent]
})
export class AppModule { }
