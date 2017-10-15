import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SparkLineChart from '../components/SparkLineChart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temp = _.map(cityData.list.map(list => Math.round(list.main.temp)), temp => temp - 273);
    const pressure = cityData.list.map(list => Math.round(list.main.pressure));
    const humidity = cityData.list.map(list => Math.round(list.main.humidity));
    const { lat , lon } = cityData.city.coord;

    const calcAverage = (data) => {
      return _.round(_.sum(data) / data.length);
    }
    
    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <SparkLineChart data={temp} color='blue' average={calcAverage(temp)} units='&#8451;' />
        <SparkLineChart data={pressure} color='red' average={calcAverage(pressure)} units='hPh' />
        <SparkLineChart data={pressure} color='green' average={calcAverage(humidity)} units='%' />
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#8451;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.length > 0 ? this.props.weather.map(this.renderWeather) : <tr><td>There no cities in data. Please find one!</td></tr>}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
