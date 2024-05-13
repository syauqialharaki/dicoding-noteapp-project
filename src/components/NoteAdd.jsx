import React from "react";
import { Link } from "react-router-dom";

function NoteAdd() {
  return (
    <>
      <div className="w-full p-10 mt-8 mb-8 border border-gray-300 rounded-lg">
        <div>
          <div className="flex items-center mb-2">
            <div className="bg-green-500 text-white text-xl px-2 py-1 rounded mr-2">
              aku
            </div>
            <h3 className="text-2xl font-semibold">tes</h3>
          </div>
          <p className="text-xl mb-4 overflow-hidden">aa</p>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <Link
          to={`/`}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-4 rounded"
        >
          Kembali
        </Link>
      </div>
    </>
  );
}

export default NoteAdd;
