import React,{Component} from "react";



class PersonalInfo extends Component{
    constructor(){
        super();

    }


    render(){
        return(
            <div className="personal-info-div">
                <div className="name">Your Name:</div>
                <div>
                    <div className="street-email">adress</div>
                    <div className="street-email">Post code and city</div>
                    <div className="street-email">email</div>
                    <div className="street-email">phone number</div>
                    <div className="street-email">Birth date</div>
                    <div className="street-email">city of birth</div>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;