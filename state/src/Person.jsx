import { useState } from 'react';

function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });
    const [fullName, setFullName] = useState({
        first: "Jan",
        last: "Novák"
    })

    const handleIncreaseAge = () => {
        setPerson({ ...person, age: person.age + 1 });
    };

    const handleFirstNameChange = (event) => {
        setFullName({ ...fullName, first: event.target.value })
    }

    const handleLastNameChange = (event) => {
        setFullName({ ...fullName, last: event.target.value })
    }

    return (
        <>
            <h1>{fullName.first} {fullName.last}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
            <br></br>
            <FirstName value={fullName.first} onChange={handleFirstNameChange}></FirstName>
            <br></br>
            <LastName value={fullName.last} onChange={handleLastNameChange}></LastName>
        </>
    );
}

function FirstName(props) {
    return <input
        type="text"
        value={props.value}
        onChange={props.onChange}
    />
}

function LastName(props) {
    return <input
        type="text"
        value={props.value}
        onChange={props.onChange}
    />
}

export default Person
