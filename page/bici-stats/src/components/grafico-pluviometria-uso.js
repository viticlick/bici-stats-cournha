import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, VerticalBarSeries} from 'react-vis';
import {DatosLluvia} from '../data/processed/date_rain';
import '../../node_modules/react-vis/dist/style.css';

export default class PluviometriaUso extends Component {

    render() {
        console.log(DatosLluvia);
        const mapData = ({data}) => 
          data.map(({date,raincorrected}) =>({ x: date, y:parseFloat(raincorrected)}));
        
        const data = mapData(DatosLluvia);

          console.log(data);
        const data2 = data.slice(2,5);
        console.log(data2);
// ["linear","ordinal","category","literal","log","time","time-utc"]
          return (
              <XYPlot height={300} width={800} xType="ordinal">
                <VerticalGridLines />
                <HorizontalGridLines />
                <YAxis />
                <VerticalBarSeries data={data} />
              </XYPlot>
          );
    }

}