import './App.css';

import React, { Component } from "react";
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  
  apikey = process.env.REACT_APP_API_KEY
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <LoadingBar color="#f11946" progress={this.state.progress} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                ></News>
              }
            >
              {" "}
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
