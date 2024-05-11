import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";

function NoteItem({ id, title, createdAt, body }) {
  const FormattedDate = showFormattedDate(createdAt);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mt-8 mb-8">
      <div className="bg-white shadow-md rounded px-6 py-4 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 mb-2 text-center">{FormattedDate}</p>
        <p
          className="mb-4 overflow-hidden text-center"
          style={{
            "-webkit-line-clamp": "3",
            "-webkit-box-orient": "vertical",
            display: "-webkit-box",
          }}
        >
          {body}
        </p>
        <div className="flex-grow"></div>
        <Link
          to={`/detail/${id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center	"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
