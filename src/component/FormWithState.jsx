import React, {useState} from 'react'

export default function FormWithState() {
    const [firstNameState, setFirstNameState] = useState("Josh");
    
    const [lastNameState, setLastNameState] = useState("Smith");

    const [telState, setTelState] = useState("123-456-7890");

    console.log(firstNameState);
    console.log(lastNameState);
    console.log(telState);

    function handleChange(event) {
    console.log(event);
    setLastNameState (event.target.value);
    setTelState (event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
    }

    return (
        <>
            <h1>User Reg</h1>
            <form>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={(e) => setFirstNameState(e.target.value)} />
                <br />
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} />
                <br />
                <label>Phone:</label>
                <input type="text" name="tel" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>SUBMIT</button>
            </form>
        </>
    )
}
