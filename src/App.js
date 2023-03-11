import React from "react";
import "./App.css";
import Categories from "./components/categories/Categories";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar bg-danger">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              Appetite.com
            </a>
          </div>
        </nav>
      </div>
      <Categories />
    </div>
  );
}

export default App;
