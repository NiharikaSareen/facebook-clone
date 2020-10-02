import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';   
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {auth} from './firebase.js'
import HomeHeader from './components/Home/HomeHeader';
import SidebarLeft from './components/Sidebar/SidebarLeft/SidebarLeft';
import SidebarRight from './components/Sidebar/SidebarRight/SidebarRight';
import Posts from './components/Posts/Posts';
function App() {
  const [user,setUser] = useState([]);

  auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      setUser(authUser)
    }else{
      setUser(false);
    }
  })

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login"> 
            <Login />
          </Route>
          <Route path="/register"> 
            <Register />
          </Route>
          <Route path="/"> 
            <HomeHeader user={user}/>
            <div className="app__page">
              <SidebarLeft user={user}/>
              <div className="app__posts">
                <Posts user={user} />
              </div>
              <SidebarRight/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
