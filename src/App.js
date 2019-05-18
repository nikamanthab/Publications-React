import React from 'react';
import User from './js/containers/user';
import Admin from './js/containers/admin';

import { Router } from "@reach/router"


function App() {
  return (
   <Router>
     <User path='/login'/>
     <Admin path='/admin'/>
   </Router>
  );
}

export default App;
