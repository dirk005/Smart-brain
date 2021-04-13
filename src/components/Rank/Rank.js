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
    // Get data form a aws api
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
      <div className="rank">
        <div className="rank_heading">
          {`${
            name.charAt(0).toUpperCase() + name.slice(1)
          }, your current entry count is...`}
        </div>
        <div className="rank_entries">{entries}</div>
        <div className="rank_badge"> {`Rank Badge ${emoji}`}</div>
        <p className="rank_text">
          {
            "This Magic Brain will detect faces in your pictures. Paste your url and give it a try."
          }
        </p>
      </div>
    );
  }
}

export default Rank;
