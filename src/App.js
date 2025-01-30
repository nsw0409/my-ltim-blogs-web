import { useState } from 'react';
import './App.css';
import Login from './login/login';
import Blogs from './blogs/blogs';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthentication = (value) =>{
    setIsAuthenticated(value);
  }
  return (
    <div className="App">
      {!isAuthenticated && <Login onData={checkAuthentication} />}
      {isAuthenticated && <Blogs/>}
    </div>
  );
}

export default App;
