import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      entries: this.props.user.entries,
      joined: this.props.user.joined,
    };
  }

  onFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onProfileUpdate = (data) => {
    const token = window.sessionStorage.getItem("token");
    let url = "https://powerful-crag-88676.herokuapp.com";
    fetch(`${url}/profile/${this.props.user.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ formInput: data }),
    })
      .then((res) => {
        if (res.status === 200 || res.status === 304) {
          this.props.loadUser({ ...this.props.user, ...data });
          this.props.toggleModal();
          console.log("loaded");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { toggleModal } = this.props;
    const { name, entries, joined } = this.state;
    return (
      <div className="profile-modal">
        <article className="">
          <main className="form">
            <h1 className="form_heading">{name}</h1>
            <h4>{`Images Submitted: ${entries}`}</h4>
            <p>{`Member since: ${new Date(joined).toLocaleDateString()}`}</p>
            <hr />

            <div className="form_item">
              <label className="form_item-label" htmlFor="user-name">
                Name
              </label>
              <input
                className="form_item-input "
                placeholder={name}
                type="text"
                name="name"
                id="name"
                onChange={this.onFormChange}
              />
            </div>

            <div className="profile_buttons">
              <button
                className="profile_button"
                onClick={() => this.onProfileUpdate({ name, age, pet })}
              >
                Save
              </button>
              <button
                className=" profile_button profile_button-cancel"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </main>
          <div className="modal-close" onClick={toggleModal}>
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
