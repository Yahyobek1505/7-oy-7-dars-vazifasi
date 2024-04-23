import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate, Link, } from "react-router-dom";

function Register() {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const repassword = useRef("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email.current.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function validation(name, email, password, repassword) {
    if (name.current.value.trim().length < 2) {
      alert("Name is not correct!");
      name.current.focus();
      return false;
    }
    if (email.current.value.trim().length < 2) {
      alert("Email is emmpty!");
      email.current.focus();
      return false;
    }
    if (password.current.value.trim().length < 3) {
      alert("Password is emmpty!");
      password.current.focus();
      return false;
    }
    const emailValid = validateEmail(email);
    if (!emailValid) {
      alert("Email is not correct!");
      email.current.focus();
      return false;
    }
    if (repassword.current.value != password.current.value) {
      alert("Repassword is not correct !");
      password.current.focus();
      repassword.current.value = "";
      return false;
    }

    return true;
  }

  function handleRegister(e) {
    e.preventDefault();
    console.log(name.current.value);
    const isValid = validation(name, email, password, repassword);
    if (isValid) {
      const user = {
        username: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      setloading(true);
      fetch("https://auth-rg69.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if ((data.message == "User registered successfully!")) {
            navigate("/Login");
          }
          if ((data.message == "Failed! Email is already in use!")) {
            alert(data.message);
            email.current.focus();
          }
          if ((data.message == "Failed! Username is already in use!")) {
            alert(data.message);
            name.current.focus();
          }
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setloading(false);
          name.current.value = "",
          email.current.value  = "",
          password.current.value = "",
          repassword.current.value = ""
        });
    }
  }
  return (
    <>
      <div className=" h-screen px-4 pt-10 dark:bg-[#272935] dark:text-white">
        <div className=" container mx-auto block w-[500px] bg-slate-50 shadow-sm shadow-current text-center p-4 form column border-2 dark:bg-[#1e2029] dark:text-white">
          <h1 className="text-4xl font-semibold mb-4">Register</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "25rem" },
            }}
            className="mb-2"
            noValidate
            autoComplete="off">
              
            <TextField
              inputRef={name}
              className="w-96"
              type="text"
              id="outlined-basic0"
              label="User name"
              variant="outlined"
            />
            <TextField
              inputRef={email}
              className="w-96"
              type="email"
              id="outlined-basic3"
              label="Email"
              variant="outlined"
            />
            <TextField
              inputRef={password}
              className="w-96"
              type="password"
              id="outlined-basic4"
              label="Password"
              variant="outlined"
            />
            <TextField
              inputRef={repassword}
              className="w-96"
              type="password"
              id="outlined-basic5"
              label="Repassword"
              variant="outlined"
            />
            <Button
              disabled={loading ? true : false}
              onClick={handleRegister}
              className="w-56 dark:bg-[#ff7ac6] dark:text-white "
              variant="contained">
              {loading ? "Loading....." : "Send"}
            
            </Button>
          </Box>
          <span className="mt-2">Already a member?</span>
          <Link to="/Login" className="text-purple-700 ml-3 ">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Register;
