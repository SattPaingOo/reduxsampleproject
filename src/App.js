import React from 'react';
import './App.css';
import LoginSuccess from './Components/LogInSuccess';
import LoginFail from './Components/LoginFail';
import {useSelector,useDispatch} from 'react-redux';
import {signin} from './Actions';

function App() {

  const username = React.createRef();
  const password = React.createRef();

  const issignin = useSelector( state => state.signin);
  const dispatch = useDispatch();

  let compo ;

  if(issignin == 1) {
    compo = ( <LoginSuccess/>)
  }else if(issignin == 2) {
    compo = ( <LoginFail/>)
  }else{
    compo = null;
  }


  return (
    <div className="App">
      <h3>Log In</h3>
      <label>User Name</label>
      <br></br>
      <input type="input" ref={username}></input>
      <br></br>
      <label>Password</label>
      <br></br>
      <input type="password" ref={password}></input>
      <br></br>
      <button onClick={()=> dispatch(signin(username.current.value,password.current.value)) }>Log in</button>
      {compo}
    </div>
  );
}

export default App;
