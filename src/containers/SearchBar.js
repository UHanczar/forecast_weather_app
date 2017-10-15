import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(e) {
    const newTerm = e.target.value;
    this.setState({
      term: newTerm
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    const { term } = this.state;
    return (
      <form className='input-group' onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          placeholder='Get a five-day forecast in your favorite cities.'
          className='form-control'
          value={term}
          onChange={e => this.onInputChange(e)}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    weather: state.weather
  };
};

const mapDispathToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(mapStateToProps, mapDispathToProps)(SearchBar);