import React from "react"
class ClassUser extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            // count:0,
            userData:{
                name:"deff",

            }
        }
        // console.log(this.props.name,"Child Constructor");
    }
    async componentDidMount(){
        const apiData=await fetch("https://api.github.com/users/rajwalke");
        const jsonData=await apiData.json();
        this.setState({
            userData:jsonData
            
        });
        
    }
    
    render(){
        console.log(this.state.userData);
        // console.log(this.props.name,"Child Render");
        const {name,avatar_url,bio}=this.state.userData;
        return(
            
            <div className="user_info">
                <h1>Class based Component</h1>
                {/* <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1,
                    })
                }}>count Increase</button>
                <h1>Count is {this.state.count}</h1> */}
                <img src={avatar_url}></img>
                <h1>Name:{name}</h1>
                <h2>Location:{bio}</h2>
            </div>
        )
    }
}
export default ClassUser;

// const apiData=await fetch("https://api.github.com/users/rajwalke");
// const jsonData=await apiData.json();
// console.log("Api",jsonData);
// this.setState({
//     userInfo:jsonData
// })
