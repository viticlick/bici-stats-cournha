import React, { Component } from 'react';
import Grafico from './grafico';
import {Grid,Row} from 'react-bootstrap';
import img1 from '../assests/pepa.jpeg'
import img2 from '../assests/pepa.jpeg'
import img3 from '../assests/pepa.jpeg'
import img4 from '../assests/pepa.jpeg'
import img5 from '../assests/pepa.jpeg'
import img6 from '../assests/pepa.jpeg'

export default class Graficos extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                            <Grafico titulo={"aa"} descripcion={"descripcion"} imagen={img1} />
                            <Grafico titulo={"aa"} descripcion={"descripcion"} imagen={img2} />
                            <Grafico titulo={"aa"} descripcion={"descripcion"} imagen={img3} />
                            <Grafico titulo={"aa"} descripcion={"descripcion"} imagen={img4} />
                            <Grafico titulo={"aa"} descripcion={"descripcion"} imagen={img5} />
                            <Grafico titulo={"aa"} descripcion={"descripcion"} imagen={img6} />

                    </Row>
                </Grid>
            </div>
        );
    }
}
    