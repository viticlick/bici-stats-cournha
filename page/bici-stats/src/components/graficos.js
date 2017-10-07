import React, { Component } from 'react';
import { Form, ButtonToolbar, ControlLabel, FormGroup, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import PluviometriaUso from './grafico-pluviometria-uso';

export default class Graficos extends Component {

    render() {
        return (
            <div>
                <PluviometriaUso />
                <Form>
                <FormGroup>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={[1]}>
                        <ToggleButton value={1} className={"btn-primary"}>Mensual</ToggleButton>
                        <ToggleButton value={2} className={"btn-primary"}>Diario</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
                            <ToggleButton value={1} className={"btn-primary"}>Horas de uso bicicleta</ToggleButton>
                            <ToggleButton value={2} className={"btn-primary"}>Litros de lluvia por metro cuadrado</ToggleButton>
                    </ToggleButtonGroup>
                    </ButtonToolbar>
                <FormGroup>
                </FormGroup>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
                            <ToggleButton value={1} className={"btn-primary"}>Ambos</ToggleButton>
                            <ToggleButton value={2} className={"btn-primary"}>Hombre</ToggleButton>
                            <ToggleButton value={3} className={"btn-primary"}>Mujer</ToggleButton>
                    </ToggleButtonGroup>
                    </ButtonToolbar>
                </FormGroup>
                </Form>
            </div>
        );
    }
}
    