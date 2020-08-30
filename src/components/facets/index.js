import React, { Component } from "react";
import "./style.css";
class Facets extends Component {
  clicker = (e) => {
    const parent = Array.from(
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes
    );
    for (let div of parent) {
      if (div.id != "heading") {
        console.log(div.style);
        if (
          div.style.display === "grid" ||
          div.style.display === "block" ||
          div.style.display === "flex" ||
          div.style.display === ""
        ) {
          div.style.display = "none";
        } else {
          div.style.display = "grid";
        }
      }
    }
  };
  render() {
    const isObject = function (a) {
      return !!a && a.constructor === Object;
    };
    return (
      <div>
        {this.props.data.map((facet) => {
          if (facet.hasOwnProperty("data")) {
            if (Array.isArray(facet.data)) {
              if (facet.data.length > 0) {
                return (
                  <div>
                    <div id="heading">
                      <div id="headCtr">
                        <h1>{facet.name}</h1>
                        <a onClick={this.clicker}>
                          <i
                            className="fa fa-angle-down fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div id="colorGrider">
                      {facet.data.map((x) =>
                        facet.name == "Colour" ? (
                          <label id="container">
                            <div style={{ color: x.code }} id="colorBox">
                              <img
                                src={`https://a.nooncdn.com/cms/pages/20181025/0ce4c3a5d392155933d4571ef91fc179/${x.code}.svg`}
                                id="colorSvg"
                              />
                              <div id="info-color">
                                <div>{x.code}</div>
                                <div style={{ color: "#7e859b" }}>
                                  ({x.count})
                                </div>
                              </div>
                            </div>
                          </label>
                        ) : null
                      )}
                    </div>
                    <div id="drawer">
                      {facet.data.map((x) => {
                        if (
                          facet.name != "Colour" &&
                          facet.name != "Fulfillment"
                        ) {
                          return (
                            <label id="checkbox-container">
                              <div id="left-row">
                                <input type="checkbox" />
                                <span>{x.name}</span>
                              </div>
                              <div id="right-row">({x.count})</div>
                            </label>
                          );
                        }
                      })}
                      {facet.data.map((x) => {
                        return facet.name == "Fulfillment" && x.code == "1" ? (
                          <label id="checkbox-container">
                            <div id="left-row">
                              <input type="checkbox" />
                              <img
                                src="https://k.nooncdn.com/s/app/2019/noon-bigalog/1c8daaae936a0074b275f82bf67a59fa5a6c53be/static/images/noon-express-en.png"
                                alt="noon-express"
                                style={{
                                  width: "71.734px",
                                  height: "17px",
                                  marginLeft: "10px",
                                }}
                              />
                            </div>
                          </label>
                        ) : null;
                      })}
                    </div>
                  </div>
                );
              }
            } else if (isObject(facet.data) == true) {
              if (Object.keys(facet.data).length > 0) {
                return (
                  <div>
                    <div id="heading">
                      <div id="headCtr">
                        <h1>{facet.name}</h1>
                      </div>
                    </div>
                    <div id="input-wrapper">
                      <input
                        type="number"
                        value="1"
                        min="1"
                        max={Object.values(facet.data)[1]}
                        id="textInput"
                      />
                      <strong>TO</strong>
                      <input
                        type="number"
                        value={Object.values(facet.data)[1]}
                        id="textInput"
                        min="1"
                        max={Object.values(facet.data)[1]}
                      />
                    </div>
                  </div>
                );
              }
            }
          }
        })}
      </div>
    );
  }
}
export default Facets;
