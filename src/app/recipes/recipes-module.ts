import {NgModule} from "@angular/core";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes.component';
//import { CommonModule } from '@angular/common';
import { SharedModuleExample } from '../shared/shared.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start.component';

import {recipesRouting} from "./recipes.routing";


@NgModule({
 declarations: [ 
   RecipesComponent,
   RecipeListComponent,
   RecipeItemComponent,
   RecipeDetailComponent,
   RecipeEditComponent,
   RecipeStartComponent

 ],
  imports: [
    FormsModule,
    //CommonModule,  // almost the same as BrowserModule but can't use BrowserModule again only in 
                 // the AppModule
    SharedModuleExample,             
    ReactiveFormsModule,
    recipesRouting

  ]
})
export class RecipesModule{}