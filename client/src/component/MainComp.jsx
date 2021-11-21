import React from 'react';

import HeaderComp from './HeaderComp';
import RecipeListComp from './RecipeListComp';
import RecipeComp from './RecipeComp';

class MainComp extends React.Component {
	render() {
		return (
			<div class='main_div' style={{ height: "100%"}}>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

				<HeaderComp />
				<div class="row" style={{height: "100%",  width: "100%"}}>
					<div class="col-2" style={{backgroundColor: "grey", color: "white"}}>
						<RecipeListComp />
					</div>
					<div class="col-10">
						<RecipeComp />
					</div>
				</div >
			</div >
		);
	}
}

export default MainComp;