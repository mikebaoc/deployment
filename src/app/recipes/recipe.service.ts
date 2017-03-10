import { Injectable, EventEmitter } from '@angular/core';
import {Headers,Http,Response} from "@angular/http";
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

 private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.dishmaps.com/thumbs/wiener-schnitzel-bon-appetit_380.jpg', 
      [new Ingredient('French Fries',2),
        new Ingredient('Pork Meat',1)]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  constructor(private http: Http) { }
  getRecipes(){
    return this.recipes;
  }
  getRecipe(id:number){
    return this.recipes[id];
  }
  deleteRecipe(recipe:Recipe){
    //removes one recipe
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }
  
  editRecipe(oldRecipe:Recipe,newRecipe:Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;
  }

  storeData():Observable<Response>{
    const body = JSON.stringify(this.recipes);
    const headers=new Headers({
      'Conatent-Type':'application/json'
    });
    return this.http.put("https://recipebook-f1860.firebaseio.com/recipes.json",body,{headers});

  }
  fetchData():Observable<Response>{
    let response= this.http.get('https://recipebook-f1860.firebaseio.com/recipes.json')
    response.map((response:Response) => response.json())
    .subscribe(
      (data:Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      }
    );
    return response;
  }

}
