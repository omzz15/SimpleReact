import { Component } from "react";
import HomeComp from "./component/MainComp";
import SignInComp from "./component/SignInComp";
import SignUpComp from "./component/SignUpComp";

class App extends Component{
  constructor(){
    super();
    this.state = {
      currUser: null,
      renderView: 1
    };
  }

  render(){
    switch(this.state.renderView){
      case 1:
        return <HomeComp/>;
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