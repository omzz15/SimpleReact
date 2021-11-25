import { Component } from "react";
import MainComp from "./component/MainComp";
import SignInComp from "./component/SignInComp";
import SignUpComp from "./component/SignUpComp";

class App extends Component{
  constructor(){
    super();
    this.state = {
      currUser: null,
      renderView: 2
    };
  }

  render(){
    switch(this.state.renderView){
      case 1:
        return(
          <MainComp/>
        );
      case 2:
        return <SignInComp/>;
      case 3:
        return <SignUpComp/>;
      default:
        return null;
    }
  }
}
export default App