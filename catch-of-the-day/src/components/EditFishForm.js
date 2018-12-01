import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };
  handleChange = event => {
    const updatedFish = {
      ...this.props.details,
      [event.currentTarget.name]: [event.currentTarget.value]
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <form className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.details.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="price"
          value={this.props.details.price}
          onChange={this.handleChange}
          placeholder="Price"
        />
        <select
          name="status"
          value={this.props.details.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          value={this.props.details.desc}
          onChange={this.handleChange}
          placeholder="Desc"
        />
        <input
          type="text"
          name="image"
          value={this.props.details.image}
          onChange={this.handleChange}
          placeholder="Image"
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </form>
    );
  }
}

export default EditFishForm;
