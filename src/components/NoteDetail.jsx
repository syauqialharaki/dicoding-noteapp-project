import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";

function NoteDetail({ id, title, createdAt, body }) {
  const FormattedDate = showFormattedDate(createdAt);
  console.log(id);
  console.log(title);
  console.log(createdAt);
  console.log(FormattedDate);
  console.log(body);
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
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded">
          Hapus
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Arsipkan
        </button>
      </div>
    </>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
