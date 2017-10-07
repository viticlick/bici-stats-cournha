import React, { Component } from 'react';
import {Thumbnail} from 'react-bootstrap';

export default class Grafico extends Component {
    render() {
        return(
            <Thumbnail src="/assets/pepa.jpeg" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
            </Thumbnail>
        )
    }
};

