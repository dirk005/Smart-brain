import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  saveAuthTokenInSession = (token) => {
    window.sessionStorage.setItem("token", token);
  };

  onSubmitSignIn = () => {
    let url = "https://powerful-crag-88676.herokuapp.com";

    fetch(`${url}/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userId && data.success === "true") {
          this.saveAuthTokenInSession(data.token);
          this.props.loadUser(data.user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="form">
        <main className="">
          <div className="">
            <fieldset id="sign_up" className="">
              <legend className="form_heading">Sign In</legend>
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
                value="Sign in"
              >
                Sign in
              </button>
            </div>
            <div className="">
              <button
                onClick={() => onRouteChange("register")}
                className="form_button"
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

export default Signin;
