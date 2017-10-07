import React, { Component } from 'react';
import Grafico from './grafico';
import {Grid,Row} from 'react-bootstrap';
import img1 from '../assests/01_plot.png';
import img2 from '../assests/02_plot.png';
import img3 from '../assests/Rplot04.png';
import img4 from '../assests/Rplot02.png';
import img5 from '../assests/00_bicis_rotas.png';
import img6 from '../assests/03_plot.png';
import img7 from '../assests/04_plot.png';
import img8 from '../assests/pepa.jpeg';


export default class Graficos extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Grafico titulo={"Bicis 'Rotas'"} descripcion={"Se estima que las bicicletas que se han utilizado menos de tres minutos y se dejaron en la misma estación que en la que fueron recogidas, estaban 'rotas'"} imagen={img5} />
                        <Grafico titulo={"Horas de uso"} descripcion={"Horas de uso diarias a lo largo de todo el año. Se puede observar que en el mes de enero el uso del servicio decrececió"} imagen={img1} />
                        <Grafico titulo={"Diferencia de uso por género"} descripcion={"Izq. Uso de la bicicleta por usuarios varones. Der. Uso de la bicicleta por usuarios hembras"} imagen={img2} />
                        <Grafico titulo={"Dispersión de uso Chicas"} descripcion={"Utilizacion del servicio de bicicletas por parte de las mujeres según la cantidad de lluvia"} imagen={img3} />
                        <Grafico titulo={"Dispersión de uso Chicas"} descripcion={"Utilizacion del servicio de bicicletas por parte de los hombres según la cantidad de lluvia"} imagen={img4} />
                        <Grafico titulo={"Desnidad lluvia"} descripcion={""} imagen={img6} />
                        <Grafico titulo={"Densidad lluvia por género"} descripcion={""} imagen={img7} />
                    </Row>
                </Grid>
            </div>
        );
    }
}
    