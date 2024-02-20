/* eslint-disable no-case-declarations */
import { useReducer } from "react";
import Form from "./Form";
import Header from "./Header";
import Card from "./Card";

const initialState = {
  firstName: "Lucy",
  lastName: "Evans",
  formIsOpen: false,
  avatar: 45,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAMES":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case "SET_AVATAR":
      return { ...state, avatar: action.payload };
    case "TOGGLE_FORM":
      const opened = !state.formIsOpen;
      return {
        ...state,
        formIsOpen: opened,
      };
  }
}

function App() {
  const randNum = Math.floor(Math.random() * 71);

  const [{ avatar, firstName, lastName, formIsOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handlSetAvatar = () =>
    dispatch({ type: "SET_AVATAR", payload: randNum });

  const openFormHandler = () => dispatch({ type: "TOGGLE_FORM" });

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="left">
          <button
            className={`btn ${formIsOpen ? "btn-disabled" : null}`}
            onClick={openFormHandler}
          >
            Open Form
          </button>
          {formIsOpen && <Form dispatch={dispatch} />}
        </div>
        <div className="right">
          <button className="btn" onClick={handlSetAvatar}>
            I&apos;m feeling lucky
          </button>
          <Card avatar={avatar} firstName={firstName} lastName={lastName} />
        </div>
      </div>
    </div>
  );
}

export default App;
