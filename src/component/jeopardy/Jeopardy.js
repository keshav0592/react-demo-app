import React, { Component } from "react";
import JeopardyPages from "../Pages/jeopardyPages";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: "",
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.answer.toLocaleLowerCase() === this.state.data.answer.toLocaleLowerCase()) {
      this.setState((state, props) => ({
        score: state.score + this.state.data.value,
        answer: "",
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - this.state.data.value,
        answer: "",
      }));
    }
    this.getNewQuestion();
  };

  //display the results on the screen
  render() {
    console.log(this.state.data.answer);
    if (!this.state.data.id) {
      return <h1>Please Wait!</h1>;
    }
    return (
      <div className="Jeopardy">
        <JeopardyPages
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default Jeopardy;
