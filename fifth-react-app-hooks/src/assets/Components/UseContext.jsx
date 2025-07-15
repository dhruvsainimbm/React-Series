//for example i want to create a context of name and email to supply data to call child components

import { createContext } from "react";
import { useContext, useState } from "react";
//context is created using createContext method
const MyContext = createContext();

function UseContext() {
  const [user, setUser] = useState({
    name: "dhruv",
    email: "dhruvsaini192@gmail.com",
  });
  return (
    <div>
      <h2>
        <u>UseContext Hook</u>:-
      </h2>
      <MyContext.Provider value={{ user, setUser }}>
        <p>My Profile is</p>
        <Profile></Profile>
      </MyContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile Section:</h2>
      <DisplayUser />
      <ChangeUser />
    </div>
  );
}

function DisplayUser() {
  // 3. Access context using useContext
  const { user } = useContext(MyContext);
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

function ChangeUser() {
  const { setUser } = useContext(MyContext);
  return (
    <button
      onClick={() =>
        setUser({
          name: "Himanshu",
          email: "himanshu@example.com",
        })
      }
    >
      Change User to Himanshu
    </button>
  );
}

export default UseContext;
