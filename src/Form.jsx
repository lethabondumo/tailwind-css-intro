/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const Form = ({ dispatch }) => {
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);

  const [isValid, setIsValid] = useState(false);

  const changeHandler = () => {
    if (
      firstNameInputRef.current.value.length < 2 ||
      lastNameInputRef.current.value.length < 2
    )
      return;

    console.log(
      firstNameInputRef.current.value,
      firstNameInputRef.current.value.length
    );

    setIsValid(true);
  };

  const closeFormHandler = () => dispatch({ type: "TOGGLE_FORM" });

  const submitHandler = (e) => {
    e.preventDefault();

    const names = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
    };

    console.log(names);

    dispatch({ type: "SET_NAMES", payload: names });
    dispatch({ type: "TOGGLE_FORM" });
  };

  return (
    <form onSubmit={submitHandler} onChange={changeHandler} className="form">
      <div>
        <input
          ref={firstNameInputRef}
          type="text"
          placeholder="Type first name here"
          className="input w-full max-w-xs"
        />
        <input
          ref={lastNameInputRef}
          type="text"
          placeholder="Type last name here"
          className="input w-full max-w-xs"
        />
      </div>
      <div className="flex gap-3 mt-10">
        <button
          type="submit"
          className={`btn ${!isValid ? "btn-disabled" : null}`}
          onClick={submitHandler}
        >
          Submit
        </button>
        <button className="btn" onClick={closeFormHandler} type="button">
          Close form
        </button>
      </div>
    </form>
  );
};

export default Form;
