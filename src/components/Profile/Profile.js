import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      entries: this.props.user.entries,
      joined: this.props.user.joined,
      age: this.props.user.age,
      pet: this.props.user.pet,
    };
  }

  onFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onProfileUpdate = (data) => {
    const token = window.sessionStorage.getItem("token");
    let url = "http://localhost:3000";
    if (process.env.NODE_ENV === "production") {
      url = "https://git.heroku.com/powerful-crag-88676.git";
    }
    fetch(`${url}/profile/${this.props.user.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ formInput: data }),
    })
      .then((res) => {
        if (res.status === 200 || res.status === 304) {
          this.props.toggleModal();
          this.props.loadUser({ ...this.props.user, ...data });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { toggleModal } = this.props;
    const { name, entries, joined, age, pet } = this.state;
    return (
      <div className="profile-modal">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
          <main className="pa4 black-80 w-80">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="h3 w3 dib"
              alt="avatar"
            />
            <h1>{name}</h1>
            <h4>{`Images Submitted: ${entries}`}</h4>
            <p>{`Member since: ${new Date(joined).toLocaleDateString()}`}</p>
            <hr />

            <label className="mt2 fw6" htmlFor="user-name">
              Name:
            </label>
            <input
              className="pa2 ba w-100 "
              placeholder={name}
              type="text"
              name="name"
              id="name"
              onChange={this.onFormChange}
            />
            <label className="mt2 fw6" htmlFor="user-age">
              Age:
            </label>
            <input
              className="pa2 ba w-100 "
              placeholder={age}
              type="text"
              name="age"
              id="age"
              onChange={this.onFormChange}
            />
            <label className="mt2 fw6" htmlFor="user-pet">
              pet:
            </label>
            <input
              className="pa2 ba w-100 "
              placeholder={pet}
              type="text"
              name="pet"
              id="pet"
              onChange={this.onFormChange}
            />
            <div
              className="mt4"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <button
                className="b pa2 grow pointer hover-white w-40 bg-blue b--black-20"
                onClick={this.onProfileUpdate({ name, age, pet })}
              >
                Save
              </button>
              <button
                className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
                onClick={() => toggleModal}
              >
                Cancel
              </button>
            </div>
          </main>
          <div className="modal-close" onClick={() => toggleModal()}>
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
