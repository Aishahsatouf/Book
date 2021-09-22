import Home from "./Components/Main";
import React from "react";
import { Route, Switch , BrowserRouter  } from 'react-router-dom';
import BooksItems from './Components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books/:id" component={BooksItems}/>
     </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
