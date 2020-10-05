import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>  
          <Route exact path="/search">
            <SearchPage/>
          </Route>  
        </Switch>  
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
