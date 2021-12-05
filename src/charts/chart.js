import { Component } from "react";
import Chart from "react-google-charts";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:""
    };
  }


  changeHandler=(e)=>{
    this.setState({
val:e.target.value
    })
  }

  render() {
    
    return (
      <div>
      <input onChange={this.changeHandler} />
      <label>{this.state.val > 10 ? "!DOM......" : ""}</label>
     </div>
    );
  }
}

export default Charts;
