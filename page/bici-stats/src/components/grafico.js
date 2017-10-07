import React, { Component } from 'react';
import {Thumbnail, Col} from 'react-bootstrap';

export default class Grafico extends Component {
    render() {
        const {titulo, descripcion, imagen} = this.props;
        return(
            <Col xs={6} md={6}>
                <Thumbnail src={imagen} alt="242x200">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </Thumbnail>
            </Col>
        )
    }
};

