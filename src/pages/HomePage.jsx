import React from 'react'
import { useContext, useRef } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function HomePage() {
    const { firstName, setFirstName, lastName, setLastName } = useContext(UserContext)
    const firstNameInputField = useRef()
    const lastNameInputField = useRef()

    function handleOnClick() {
        setFirstName(firstNameInputField.current.value)
        setLastName(lastNameInputField.current.value)
    }
    return (
        <div>
            <h1>Home Page</h1>
            <input ref={firstNameInputField} placeholder="First Name" />
            <input ref={lastNameInputField} placeholder="Last Name" />
            <button onClick={handleOnClick}>Save</button>
            {/* <input 
                onChange={(event) => setFirstName(event.target.value)} 
                placeholder="First Name"
            />
            <input 
                onChange={(event) => setLastName(event.target.value)} 
                placeholder="Last Name"
            /> */}
            
            <p>Firstname: {firstName}</p>
            <p>Lastname: {lastName}</p>
        </div>
    )
}
