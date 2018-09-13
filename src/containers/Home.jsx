import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getVariable } from '../selectors/home'
import { updateMyVar } from '../actions/home';


const select = () => ({
  myVar: getVariable()
})
/**
 * Home class
 */
@connect(select)
export default class Home extends React.Component {

  static propTypes = {
    myVar: PropTypes.string.isRequired,
    updateMyVar: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="container app-bg">
        {this.props.myVar}
        <button
          onClick={this.handleUpdate}
        >
          Click to update Redux state.
        </button>
      </div>
    );
  }

  handleUpdate() {
    updateMyVar()
  }
}
