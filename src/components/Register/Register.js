import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    let url = "https://powerful-crag-88676.herokuapp.com";

    fetch(`${url}/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className="form">
        <main className="">
          <div className="">
            <fieldset id="sign_up" className="">
              <legend className="form_heading">Register</legend>
              <div className="form_item">
                <label className="form_item-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form_item-input"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="form_item">
                <label className="form_item-label" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="form_item-input"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="form_item">
                <label className="form_item-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form_item-input"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <button
                onClick={this.onSubmitSignIn}
                className="form_button"
                type="submit"
                value="Register"
              >
                Register
              </button>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
