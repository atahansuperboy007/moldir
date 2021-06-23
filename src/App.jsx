import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./style.css";
import Search from "./comp/Search";
import Popular from "./comp/Popular";
import Movie from "./Movie";
import MovieList from "./comp/MovieList";
import Coming from "./comp/Coming";
import { useState } from "react";
import Form from "./comp/Form";

function App() {
  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <header>
            <Link to="/" className="logo">
             Movie App
            </Link>
            <div className="links">
              <Link to="/">Фильмы в кино</Link>
              <Link to="/up">Скоро Выйдут</Link>
              <Link to="/popular">Популярные фильмы</Link>
              {/* <Link to="/">Сохранённые</Link> */}

            </div>
            <div className="search">
              <Form />
            </div>
          </header>

          <Switch>
            <Route path="/up">
              <Coming />
            </Route>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/popular"> 
              <Popular />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/search/:q">
              <Search />
            </Route>
          </Switch>
          <footer>
            Created by <div className="nick">mxldiir</div>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
