import "./App.css";
import Login from "./login/Login";
import Register from './login/register';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <div className="App">
      <Route>
        <Login />
      </Route>
        
        <Register/>
    </div>
   </BrowserRouter>
  );
}

export default App;
