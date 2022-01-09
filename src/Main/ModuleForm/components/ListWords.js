import React from "react";

export default function ListWords({ wordslist }) {
  return (
    <>
      <div className="p-4"></div>
      <div className="container bg-white p-5">
        <div>
          <h1 className="display-6">Results</h1>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="col-sm-8">
            {wordslist.map((wordobj, index) => (
              <input
                key={index}
                type="email"
                className="form-control mt-4 bg-white"
                id="inputEmail3"
                defaultValue={wordobj.word}
                readOnly
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
