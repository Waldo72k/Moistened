import {React, useState}from 'react'
import { TextField, Button, InputAdornment, IconButton  } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { auth } from "../config/firebase"
import {createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Dashboard from './dashboard';

const tema = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#4763E4',
      darker: '#3f57c5',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //El auth guarda l;a data hasta que usuario esta metido en ese momento, por ejemplo pa ver su email
  // console.log(auth?.currentUser?.email);
  const logOut = async () => {
    try{
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }

  const signIn = async () => {
    try{
    await createUserWithEmailAndPassword(auth, email, password);
    pasar = true;
    } catch (err) {
      console.error(err);
    }
  }

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div>

        <h1 className=' text-center text-indigo-600 font-extrabold text-4xl sm:mt-32 lg:mt-64'>Moistened</h1>
        <div className="sm:w-3/4 mt-2 md:w-1/2 mx-auto text-center">
           <p className="text-center justify-center text-2xl ">Bienvenido, ingrese sus credenciales para acceder al sistema</p>
        </div>
        <div className="flex flex-col mx-auto xl:w-1/3 lg:w-1/3 sm:w-1/2 mt-7 ">
          <p>Nombre de usuario</p>
          <TextField fullWidth label="" id="" className="" onChange={(e) => setEmail(e.target.value)} />
          <p>Contraseña</p>
          <TextField fullWidth label="" type='password' id="fullWidth" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="flex flex-col mx-auto xl:w-1/3 lg:w-1/3 sm:w-1/2 mt-7 ">
        <ThemeProvider theme={tema}>
        <Button variant="contained" color='primary' onClick={handleLogin}>Ingresar</Button>
        </ThemeProvider>
        </div>

    </div>
  )
}

export default Login