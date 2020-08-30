import React, { Component } from "react";
import Facets from "./components/facets";
import Data from "./data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount = () => {
    const curr = this.myRef.current;
    {
      Data.map((x) => {
        if (x.hasOwnProperty("breadcrumbs")) {
          for (let i of x.breadcrumbs) {
            const span = document.createElement("span");
            span.innerHTML = " > " + i.name;
            curr.appendChild(span);
          }
          console.log(curr);
        }
      });
    }
  };
  render() {
    return (
      <div>
        <nav id="dir" ref={this.myRef}>
          <span>Home </span>
        </nav>
        <div className="App">
          <div id="Facets">
            <Facets data={Data[0].facets} />
          </div>
          <div>
            <h1 id="huge">CONTENT</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
