import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import Message from "./Message";
import validation from "./validation";

const PasswordValidator = ({ value, onChange, minLength, onSubmit }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleConfirmPassword = ({ target }) => {
    setConfirmPassword(target.value);
  };
  const [result, setResult] = useState(null);
  const submitPassword = (e) => {
    e.preventDefault();
    const { matched, requirements, valid } = validation(
      value,
      confirmPassword,
      minLength
    );
    setResult({ matched, requirements, valid });
    if (valid) {
      onSubmit();
    }
  };

  return (
    <div className="w-full ">
      <form onSubmit={submitPassword}>
        <InputField
          placeholder={"Enter your password"}
          value={value}
          onChange={onChange}
        />
        {result?.requirements.map((requirement) => (
          <Message type="error" message={requirement} key={requirement} />
        ))}
        <InputField
          placeholder={"Confirm your password"}
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        {result === null ? (
          ""
        ) : result.matched ? (
          ""
        ) : (
          <Message type="error" message="Password doesn't match" />
        )}
        {result?.valid && <Message message="Password submitted successfully" />}

        <div className=" flex justify-center">
          <button className="px-4 py-2 mt-2 bg-green-500 rounded-lg text-white font-bold hover:ring border-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

PasswordValidator.proTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  minLength: PropTypes.number,
  onSubmit: PropTypes.func,
};
PasswordValidator.defaultProps = {
  value: "",
  onChange: function () {},
  minLength: 6,
  onSubmit: function () {},
};

export default PasswordValidator;
