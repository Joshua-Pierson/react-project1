import React, {useState} from 'react'

export default function FormWithState() {
    const [firstNameState, setFirstNameState] = useState("Josh");
    
    const [lastNameState, setLastNameState] = useState("Smith");
    console.log(firstNameState);
    console.log(lastNameState);

    function handleChange(event) {
    console.log(event);
    setLastNameState (event.target.value);
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
                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}
