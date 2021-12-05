import React, { Component } from "react";
import "./app.css"

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
      console.log(window.pageYOffset);
    return (
        <div>
      <nav
        className={this.state.visible ? "navbar" : "navbar--hidden"}
      >
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </nav>
      <br/>
      <br/>
      
        <img src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"/>
        <img src="https://static.toiimg.com/photo/72975551.cms"/>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"/>
      </div>
    );
  }
}

export default Navbar