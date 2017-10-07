import React, { Component } from 'react';
import logo from './logo.svg';
import Graficos from './components/graficos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
        <div class="header clearfix">
          <nav>
            <ul class="nav nav-pills float-right">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
          </nav>
          <h3 class="text-muted">Bici Stats Coruña</h3>
        </div>
  
        <div class="jumbotron">
          <h1 class="display-3">Estudio del uso de BiciCoruña</h1>
          <p class="lead">En este estudio mostramos la influencia del clima en los hábitos de movilidad de la población Coruñesa</p>
        </div>
  
        <div class="row marketing">
          <div class="col-lg-6">
            <h4>Fuentes de datos</h4>
            <p>Para el estudio, hemos tomado los datos de Coruña Smart City y Meteogalicia.</p>
          </div>

          <div class="col-lg-6">
            <h4>Estudio estadístico exhaustivo</h4>
            <p>Se han utilizado las mas avanzadas herramientas y procedimientos para la obtención de los datos.</p>
          </div>
          <div class="col-lg-12">
            <Graficos />
          </div>
        </div>

        <footer class="footer">
        <p>&copy; Hackatiño 2017</p>
      </footer>

      </div>
      </div>
    );
  }
}

export default App;
