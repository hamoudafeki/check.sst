import "./App.css";
import React, { Component } from "react";
export default class App extends Component {
  // states constructor  
  state = {
    fullName: "Hamouda Feki",
    bio: "Hello world",
    imgSrc: "My Image",
    profession: "Sales Promoter",
    isShow:true
  };
  // lifecyle components increment
  componentDidMount(){
    console.log("componentDidMount")
    // setInterval(this.state, 1000);

  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
        // setInterval(this.state, 1000);

  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
        // setInterval(this.state, 1000);

  }
  render() {
    console.log("render")
    return (
      <div className="App">
        {/* fullName & button */}
        <h2 style={{marginTop:"70px"}}>{this.state.fullName}</h2>
        <button className='glow-on-hover'
          onClick={() => {this.setState({ fullName: "Abdelaziz Feki" });}}>Change Name</button>
        {/* bio & button  */}
        <h2>{this.state.bio}</h2>
        <button className='glow-on-hover'
          onClick={() => {
            this.setState({ bio: "BE U" });
          }}
        >
          {" "}
          Change Bio{" "}
        </button>
        {/* image & button Show */}
        <h2>{this.state.imgSrc}</h2>
        <button className='glow-on-hover'
          onClick={() => {
            this.setState({
              imgSrc: (
                <img style={{height:"30vh", width:"20vw", borderRadius:"15px"}}
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="motivation"
                />
              ),
            });
          }}
        >
          Show Image
        </button>
        {/* profession & button Show */}
        <h2>{this.state.profession}</h2>
        <button className='glow-on-hover'
          onClick={() => {
            this.setState({ profession: "Sales Development" });
          }}
        >
          Show Profession
        </button>
      </div>
    );
  }
}
