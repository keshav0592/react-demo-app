import React from "react";

function jeopardyPages(props) {
  console.log(props);
  return (
    <div className="Pages">
      <table>
        <tbody>
          <tr>
            <td>Question</td>
            <td>Category</td>
            <td>Point Value</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{props.data.question}</td>
            <td>{props.data.category && props.data.category.title}</td>
            <td>{props.data.value}</td>
          </tr>
        </tbody>
      </table>

      <div className="Contact">
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Your Answer"
            name="userAnswer"
            value={props.value}
            onChange={props.handleChange}
            autoFocus
          />
          <button>Submit Answer</button>
        </form>
        Your Score is {props.score}
      </div>
    </div>
  );
}

export default jeopardyPages;
