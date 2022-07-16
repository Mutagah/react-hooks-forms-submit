import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData,setSubmittedData]=useState([]);
  //adding state to hold error messages
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    //putting together the current form Data
    if (firstName.length > 0){
    //Prevents the default behaviour of a form which is trying and submitting the form 
    //triggerring a refresh on the page.
    const formData = {
      firstName : firstName,
      lastName : lastName,
    }
    const dataArray = [...submittedData,formData]
    setSubmittedData(dataArray);
    setFirstName("")
    setLastName("")
    setErrors([])}
    else {
      setErrors(["First name is required"])
    }
    //Would be used if we had a server
    // props.sendFormData(FormData)
    // //Clearing data from an input field
    // setFirstName("")
    // setLastName("")
  };
  
  const listofSubmissions = submittedData.map((element,index)=> {
  return (
      <div key={index}>
        {element.firstName} {element.lastName}
      </div>
  ) 
  });

  return (<>
    <form  onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0 ? errors.map((errorMessage,index)=> {return(
      <p key={index} style={{color:"red"}}>{errorMessage}</p>
    )}): null}
    <h3>{listofSubmissions}</h3>
    </>
  );
}

export default Form;
