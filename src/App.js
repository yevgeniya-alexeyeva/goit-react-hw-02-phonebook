import { Component } from "react";
import shortid from "shortid";
// import PropTypes from "prop-types";
import "./App.css";
import Form from "./components/Form";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
  };

  saveNewContact = (e) => {
    e.preventDefault();
    console.log("saveNewContact");
    this.state.name &&
      this.setState((prevState) => {
        return {
          contacts: [
            {
              id: shortid.generate(),
              name: this.state.name,
              number: this.state.number,
            },
            ...prevState.contacts,
          ],
          name: "",
        };
      });
    e.currentTarget.reset();
  };
  getContactData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={this.saveNewContact} onInput={this.getContactData} />
        <h2>Contacts</h2>
        <Contacts contactsList={this.state.contacts} />
      </div>
    );
  }
}

export default App;
