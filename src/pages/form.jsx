import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [persons, setPersons] = useState([]);

  async function saveUser() {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ name, age }),
    });

    setName("");
    setAge(0);

    const resp = await fetch("/api/form");
    const listPersons = await resp.json();
    setPersons(listPersons);
  }

  function renderPersons() {
    return persons.map((person, i) => {
      return (
        <li key={i}>
          {person.name} tem {person.age} anos.
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Integrate with an API #02</h1>
      <input
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter you age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={saveUser}>Send</button>

      <ul>{renderPersons()}</ul>
    </div>
  );
}
