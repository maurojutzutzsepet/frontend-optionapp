import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validText } from "../store/actions";
import ListWords from "./ListWords";

export default function FormValidText() {
  const dispatch = useDispatch();
  //reducer que viene de redux
  const wordslist = useSelector(
    ({ textReducer }) => textReducer.textReducer.words
  );
  const [textvalid, setTextvalid] = useState("");

  const makeRequest = () => {
    dispatch(validText(textvalid));
  };

  return (
    <div>
      <nav className="navbar navbar-light" style={{ background: "red" }}>
        <div className="container-fluid justify-content-center">
          <div className="d-flex w-50">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Insert text"
              aria-label="Search"
              onChange={(e) => setTextvalid(e.target.value)}
            />
            <button
              className="btn bg-primary text-white"
              onClick={() => makeRequest()}
            >
              Send
            </button>
          </div>
        </div>
      </nav>
      {/*enviamos por props las palabras */}
      <ListWords wordslist={wordslist} />
    </div>
  );
}
