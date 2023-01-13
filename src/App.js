import React,{Component} from "react";
import CvComp from "./components/CvComp";
import Header from "./components/Header";
import "./styles/App.css";



/**
 * Goals:
 * website that makes my life easier in creating / editing a CV
 * Make it possible to download it as PDF
 * optional: possibility of uploading word doc / pdf and editing it.
 */



class App extends Component{

constructor(){
  super();

}


render(){

return(
  <div className="window">
   
    <CvComp></CvComp>
  </div>
);

}


}




export default App;