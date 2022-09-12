import React, { useState } from "react";
import PasswordValidator from "../../components/PasswordValidator";

export default function App() {
  const [password, setPassword] = useState("");
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  const onSubmit = () => {
    console.log("password submitted");
  };
  return (
    <div className="flex w-full  h-screen items-center justify-center bg-slate-100">
      <div className="w-full md:w-2/3 lg:w-1/3">
        <PasswordValidator
          value={password}
          onChange={handlePassword}
          minLength={6}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
