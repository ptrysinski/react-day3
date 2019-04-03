import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Counter from './Counter/Counter';
import TypeName from './TypeName/TypeName';
import Lifecycle from './Lifecycle/Lifecycle';

const App = (props) => (
  
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Lifecycle">Lifecycle</Link>
        </li>
        <li>
          <Link to="/Counter">Counter</Link>
        </li>
        <li>
          <Link to="/TypeName">TypeName</Link>
        </li>
      </ul>

      <Route path={'/Counter'} component={Counter} />
      <Route path={'/TypeName'} component={TypeName} />
      <Route path={'/Lifecycle'} component={Lifecycle} />
    </Router>

)


export default App;
