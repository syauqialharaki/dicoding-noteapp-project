import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  onDeleteHandler = () => {
    const { id, onDelete, navigate } = this.props;
    onDelete(id);
  };
  render() {
    const { title, createdAt, body } = this.props;
    const FormattedDate = showFormattedDate(createdAt);

    return (
      <>
        <div className="w-full p-10 mt-8 mb-8 border border-gray-300 rounded-lg">
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-green-500 text-white text-xl px-2 py-1 rounded mr-2">
                {FormattedDate}
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <p className="text-xl mb-4 overflow-hidden">{body}</p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <Link
            to={`/`}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-4 rounded"
          >
            Kembali
          </Link>
          <button
            onClick={this.onDeleteHandler}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded"
          >
            Hapus
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Arsipkan
          </button>
        </div>
      </>
    );
  }
}
NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
