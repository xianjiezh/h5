import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Video from './pages/video/Video';
import Form from './pages/form/Form';
import Info from './pages/info/Info';
import VideoList from './pages/videoList/VideoList';
import PrizeWheel from './pages/prizeWheel/PrizeWheel';

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
        {/* <hr /> */}
        <Switch>
          <Route exact path="/" component={VideoList}/>
          <Route exact path="/video/:id" component={Video} />
          <Route path="/form/:id" component={Form} />
          <Route path="/info" component={Info} />
          <Route path="/prizeWheel/:id" component={PrizeWheel}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
