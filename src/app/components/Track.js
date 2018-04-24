import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import Header from './Landing/Header';
import Footer from './Landing/Footer';

class Track extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    if (this.props.tracks.length == 0) {
      this.props.getTracks();
    }
    if (!this.props.event) this.props.getEvent();
  }

  render() {
    const match = this.props.match;
    if (!match.params || !match.params.track) return <Redirect to="/" />;
    if (this.props.tracks.length > 0) {
      var track = this.props.tracks.filter(track => track.slug === match.params.track);
      if (track.length === 0) return <Redirect to="/404" />;
      else track = track[0];
    } else track = {};

    var style = {
      backgroundImage: `url(${track.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    const e = this.props.event;
    return (
      <div className={styles.track_page}>
        <Grid className={styles.grid} fluid>
          <Row style={style} className={styles.background_top}>
            <Col className={styles.track_name} xs={12} sm={12} md={12} lg={12}>
              <Header name={e && e.name} />
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12} sm={12} md={12}>
              <h1>{track.title}</h1>
            </Col>
            <Col xs={12} sm={12} md={12}>
              <div dangerouslySetInnerHTML={{ __html: track.content }} />
            </Col>
          </Row>
          <hr className={styles.separator} />
        </Grid>
        <Row center="xs">
          <Footer email={e && e.email} />
        </Row>
      </div>
    );
  }
}

Track.propTypes = {
  tracks: PropTypes.array,
  getTracks: PropTypes.func,
  getEvent: PropTypes.func,
  match: PropTypes.object,
  event: PropTypes.object
};

function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || [],
    event: state.event
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTracks() {
      dispatch({ type: 'GET_TRACKS' });
    },
    getEvent() {
      dispatch({ type: 'GET_EVENT' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);
