import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Partners from './Partners';
import Tracks from './Tracks';
import ContentSections from './ContentSections';
import Welcome from './Welcome';

class Landing extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: 'GET_EVENT' });
  }
  render() {
    var e = this.props.event;
    console.log(e);
    return e ? (
      <div>
        <Welcome
          name={e.name}
          header1={e.header1}
          content1={e.content1}
          start_date={e.start_date}
          end_date={e.end_date}
          city={e.city}
          country={e.country}
        />
        <Partners />
        <Tracks />
        <ContentSections />
      </div>
    ) : null;
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
