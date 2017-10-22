import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as flightsAction from '../actions/flightsAction';

import Select from './SelectField.jsx';
import CardHandler from './CardHandler.jsx';
import CircularProgress from 'material-ui/CircularProgress';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCarrier: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.getFlightsByCurrentCarrier = this.getFlightsByCurrentCarrier.bind(this);
    this.getUniqueCompany = this.getUniqueCompany.bind(this);

  }

  handleChange(event, index, value) {
    this.setState({currentCarrier: value});
  }

  getFlightsByCurrentCarrier() {
    if (!this.state.currentCarrier || this.state.currentCarrier === 'All') {
      return this.props.flights;
    }
    return this.props.flights.filter((val) => {
      return val.carrier === this.state.currentCarrier;
    });
  }

  getUniqueCompany() {
    debugger
    console.log(this.props.companies);
    return this.props.companies;
    // this.props.flights.filter(function (n) {
    //   f.indexOf(n['carrier']) == -1 && f.push(n['carrier'])
    // });
    // return f;
  }

  render() {
    debugger;
    if (!this.props.flights || this.props.flights.length < 1) {
      return (
        <div>
          <CircularProgress size={80} thickness={7}/>
        </div>
      )
    }

    return (
      <div>
        <Select
          handleChange={this.handleChange}
          uniqueCompanies={this.props.companies}
          value={this.state.currentCarrier}
        />
        <CardHandler flights={this.getFlightsByCurrentCarrier()}/>
      </div>
    );
  }
}

MainPage.propTypes = {
  flights: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps!!! ',state, ownProps);
  return {
    flights: state.flights,
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps dispatch',dispatch)
  return {
    actions: bindActionCreators(flightsAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

