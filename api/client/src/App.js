import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from './Pages/Home';
import Reviews from './Pages/Reviews';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/reviews" component={Reviews} />
    </Router>
  );
}

export default App;
