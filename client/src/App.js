import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import UsersList from "./components/User/UsersList";
import EditUser from "./components/User/EditUser";
import AddUser from "./components/User/AddUser";
import Dashboard from "./Dashboard";
import SignInSide from "./components/Auth/SignInSide";
import SignUp from "./components/Auth/SignUp";

import { PrivateRoute } from "./components/PrivateRoute";
import history from "./helpers/history";
import { useDispatch, useSelector } from "react-redux";

import { usersActions } from "./actions";
import { PATHS } from "./constants";

function App() {
  const [modalStatus, displayModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const handleCancel = () => {
    displayModal(false);
    dispatch(usersActions.resetStore());
  };

  useEffect(() => {
    if (users && users.error) {
      // check error msg
      let isUniqueEmail = users.error.includes(`user_email_unique`);
      if (isUniqueEmail) {
        displayModal(isUniqueEmail);
        setErrorMessage("Email address must be unique.");
      }
    }
  }, [users, displayModal]);

  return (
    <Router history={history}>
      <Route path="/auth/login" component={SignInSide} />

      <PrivateRoute path="/" component={Dashboard} />
    </Router>
  );
  /*
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<UsersList />} exact></Route>
          <Route path="/user/add" element={<AddUser />} exact></Route>
          <Route path="/user/edit/:_id" element={<EditUser />} exact></Route>
          <Route path="/dashboard" element={<Dashboard />} exact></Route>
          <Route path="/" element={<Dashboard />} exact></Route>
          <Route path="/settings" element={<Dashboard />} exact></Route>
          <Route path="/profile" element={<Dashboard />} exact></Route>
          <Route path="/auth/login" element={<SignInSide />} exact></Route>
          <Route path="/logout" element={<Dashboard />} exact></Route>
          <Route path="/auth/signup" element={<SignUp />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
    */
}

export default App;
