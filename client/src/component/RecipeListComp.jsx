import React from 'react';

class RecipeListComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: this.readRecipes() }
  }
  render() {
    return (
      <div style={{ margin: "5%" , width: "100%"}}>
        <h4>Top Recipes</h4>
        <div class="container" style = {{width: "100%"}}>
          {this.state.recipes.map(item => this.renderRecipe(item))}
        </div>
      </div>
    );
  }

  renderRecipe(item) {
    function onGetRecipe(id){
      alert(id);
    }
    
    return (
      <a href="#" onClick={() => onGetRecipe(item.recipe.id)}>
      <div class="row" style ={{width: "100%"}}>
        <div class="col-4">
          {item.recipe.name}
        </div>
        <div class="col-4">
          {item.recipe.author}
        </div>
        <div class="col-4">
          {item.recipe.cookTime}
        </div>
      </div>
      </a>
    )
  }

  readRecipes() {
    let r = {
      recipes: [
        {
          recipe: {
            id: 1,
            name: "first",
            cookTime: 20,
            author: "xyz"
          }
        },
        {
          recipe: {
            id: 2,
            name: "second",
            cookTime: 20,
            author: "abc"
          }
        }
      ]
    }
    return r.recipes
  }
}

export default RecipeListComp;
