import React from 'react';

class RecipeComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedRecipe: null, };
  }

  render() {
    return (
      <div style = {{margin: "1%"}}>
        <h1>Recipe page</h1>
        <div id = "getRecipe">
          <h3>Select Recipe</h3>
        </div>
        <div id = "showRecipe">

        </div>
      </div>
    );
  }
}

export default RecipeComp;