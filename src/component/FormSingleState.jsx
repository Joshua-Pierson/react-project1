import React, {useState} from "react";

export default function FormSingleState() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        tel: ""
    });

    function handleChange(e) {
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <h1>User Reg</h1>
            <form>
                <label>First Name: </label>
                <input type="text" name="firstName"  onChange={handleChange} />
                <br />
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={handleChange} />
                <br />
                <label>Phone: </label>
                <input type="text" name="tel" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>SUBMIT</button>
            </form>
        </>
    )
}
