import Button from '@mui/material/Button';
import { Box, TextField } from "@mui/material";
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const name = useRef('');
  const password = useRef("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  function validation(name, password) {
    if (name.current.value.trim().length < 2) {
      alert("Name is not correct!");
      name.current.focus();
      return false;
    }
    if (password.current.value.trim().length < 3) {
      alert("Password is emmpty!");
      password.current.focus();
      return false;
    }
    return true;
  }

  function handleLogin(e) {
    e.preventDefault();
    const isValid = validation(name, password);
    if (isValid) {
      const user = {
        username: name.current.value,
        password: password.current.value
      };
      setloading(true);
      fetch("https://auth-rg69.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data))
            navigate("/");
          }
          if ((data.message == "Invalid Password!")) {
            alert(data.message);
            password.current.focus();
          }
          if ((data.message == "User Not found.")) {
            alert(data.message);
            name.current.focus();
          }
          
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setloading(false);
        });
    }
  }

  return (
    <>
      <div className=" h-screen px-4 pt-10 dark:bg-[#272935] dark:text-white">
        <div className=" container mx-auto block w-[500px] bg-slate-50 shadow-sm shadow-current text-center p-4 form column border-2 dark:bg-[#272935] dark:text-white">
        <h1 className="text-4xl font-semibold mb-4">Login</h1>
        <Box  component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25rem'},
      }}
      className='mb-4'
      noValidate
      autoComplete="off">
        <TextField inputRef={name} className="w-96" type="text" id="outlined-basic1" label="User name" variant="outlined" /> 
        <TextField inputRef={password} className="w-96" type="password" id="outlined-basic2" label="Password" variant="outlined" />
        <Button disabled={loading ? true : false} onClick={handleLogin} className="w-56 bg-[#ff7ac6]"  variant="contained">{loading ? "Loading....." : "Login"}
</Button>
        </Box>
        <span >Not a member yet?</span>
        <Link to="/register" className="text-blue-700 ml-2 dark:text-[#ff7ac6] ">Register</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
