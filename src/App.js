import React, { useState } from "react";
import AddUSer from "./components/Users/AddUSer";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString },
      ];
    });
  };

  return (
    <div>
      <AddUSer onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
