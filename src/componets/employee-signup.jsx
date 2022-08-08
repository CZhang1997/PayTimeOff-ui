import React, { useContext, useState } from "react";
import LoginContext from "../contexts/login-context";
import { employeeSignUpAPIcall } from "../service";

export default function EmployeeSignUp() {
  const [fistname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [hiredDate, setHiredDate] = useState(new Date());
  const [password, SetPassword] = useState("Temp$12345");
  const { user } = useContext(LoginContext);
  //   console.log(user);

  const handleSignUp = () => {
    const item = {
      fistname,
      lastname,
      email,
      username,
      //   hiredDate: hiredDate,
      //   password,
    };
    // const {
    //   signInUserSession: {
    //     idToken: { jwtToken },
    //   },
    // } = user;
    // console.log(jwtToken);

    employeeSignUpAPIcall({
      item: item,
      jwtToken: user.getSignInUserSession().getIdToken().getJwtToken(),
      callback: (e) => console.log(e),
    });
  };

  return (
    <div className="employee-sign">
      <form>
        <h2>Employee Sign Up</h2>
        <div className="form-group">
          <label>Firstname</label>
          <input
            type="text"
            className="form-control"
            value={fistname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <label>Hired Date</label>
          <input
            type="date"
            className="form-control"
            value={hiredDate}
            onChange={(e) => setHiredDate(e.target.value)}
          />
        </div> */}
        {/* <div className="form-group">
            <label></label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => e.target.value}
            />
          </div> */}
        <div className="form-group">
          <label>user name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignUp}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
