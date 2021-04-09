import React, { Component } from "react";

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = { emoji: "" };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  componentDidUpdate(prevProps, precState) {
    if (
      prevProps.entries === this.props.entries &&
      prevProps.name === this.props.name
    ) {
      return null;
    } else {
      this.generateEmoji(this.props.entries);
    }
  }

  generateEmoji = (entries) => {
    fetch(
      `https://y1ws8ef5o2.execute-api.us-east-1.amazonaws.com/rank?rank=${entries}`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ emoji: data.input }))
      .catch(console.log);
  };
  render() {
    const { name, entries } = this.props;
    const { emoji } = this.state;
    return (
      <div>
        <div className="white f3">
          {`${name}, your current entry count is...`}
        </div>
        <div className="white f1">{entries}</div>
        <div className="white f3"> {`Rank Badge ${emoji}`}</div>
      </div>
    );
  }
}

export default Rank;
