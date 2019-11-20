import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Video from './pages/video/Video';
import Form from './pages/form/form';
import FormCollect from './pages/formCollect/FormCollect';

function App() {
  return (
    <Router>
      <div>
        {/*<ul>*/}
          {/*<li>*/}
            {/*<Link to="/">Home</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/about">About</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to="/dashboard">Dashboard</Link>*/}
          {/*</li>*/}
        {/*</ul>*/}
        <hr />
        <Switch>
          <Route exact path="/">
            <Video />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/formCollect">
            <FormCollect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
