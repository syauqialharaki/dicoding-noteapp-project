import React from "react";
import PropTypes from "prop-types";

class NoteAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);

    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitChangeEventHandler}>
        <div className="bg-white  rounded-lg px-6 py-4 flex flex-col h-full">
          <input
            type="text"
            placeholder="Judul"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            className="text-xl border rounded-lg px-6 py-4 font-semibold mb-2 text-center outline-none"
          />
          <textarea
            placeholder="Isi catatan"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            className="mb-2 border rounded-lg px-6 py-4 overflow-hidden text-center resize-none outline-none flex-grow"
            style={{
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Tambah
          </button>
        </div>
      </form>
    );
  }
}

NoteAdd.propType = {
  addNote: PropTypes.func.isRequired,
};

export default NoteAdd;
