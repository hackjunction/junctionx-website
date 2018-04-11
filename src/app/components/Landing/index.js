import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Partners from './Partners';
import Tracks from './Tracks';
import ContentSections from './ContentSections';

class Landing extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: 'GET_EVENT' });
  }
  render() {
    return (
      <div>
        {this.props.event ? this.props.event.name : null}
        <Partners />
        <Tracks />
        <ContentSections />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.event || null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

Landing.propTypes = {
  event: PropTypes.object,
  dispatch: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
