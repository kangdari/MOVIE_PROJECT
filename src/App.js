import React from 'react';
import { HashRouter, Route } from 'react-router-dom'; 
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Route path='/' component={Home} exact />
      <Route path='/movie/:id' component={Detail} />
    </HashRouter>
    );
}

export default App;
