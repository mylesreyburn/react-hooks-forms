import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event){
    event.preventDefault()
    console.log("firstName:", firstName)
    console.log("event.target.value:", event.target.value)
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event){
    event.preventDefault()
    setLastName(event.target.value)
  }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
