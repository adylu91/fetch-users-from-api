import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import { Component } from "react";

class App extends Component {
  state = {
    usersArr: [],
    isArrEmpty: true,
    isFetchRunning: false,
  };

  handleClickAdd = (e) => {
    this.fetchUsers();
  };

  handleClickReset = (e) => {
    this.setState({
      usersArr: [],
      isArrEmpty: true,
    });
  };

  fetchUsers = () => {
    const API = "https://randomuser.me/api/?results=1";
    this.setState({
      isFetchRunning: true,
    });
    fetch(API)
      .then((data1) => data1.json())
      .then((data2) => {
        this.setState({
          usersArr: this.state.usersArr.concat(data2.results),
          isArrEmpty: false,
          isFetchRunning: false,
        });
      })
      .catch((err) => {
        window.alert("Wystąpił błąd");
        this.setState({
          isFetchRunning: false,
        });
      });
  };

  render() {
    return (
      <>
        <Header
          clickAdd={this.handleClickAdd}
          clickReset={this.handleClickReset}
          isArrEmpty={this.state.isArrEmpty}
          isFetchRunning={this.state.isFetchRunning}
        />
        <Main
          usersArr={this.state.usersArr}
          isArrEmpty={this.state.isArrEmpty}
        />
      </>
    );
  }
}

export default App;
