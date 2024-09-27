import User from "./User";
import ClassUser from "./ClassUser";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // userInfo:{
                // name:"def"

            // }
        }
        // console.log("Parent constructor");
    }
    async componentDidMount(){
        // console.log("parent ComponentDidCatch");
        // API call 
        
       
    }
    render(){
        // console.log("Parent Render");
        return(
            <div>
            <h1>About Page is Here</h1>
            {/* <User name={"Mr.Raj Walke"} location={"Mumbai City"} age={"20"}/> */}
            <ClassUser/>
        </div>

        )
    }
}
// const About=()=>{
//     return(
//         <div>
//             <h1>About Page is Here</h1>
//             <User name={"Mr.Raj Walke"} location={"Mumbai City"} age={"20"}/>
//             <ClassUser name={"Mr.Raj Walke"} location={"Mumbai City"} age={"20"}/>
//         </div>
//     )
// }
export default About;
