import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './Tracks.c.scss';

class Tracks extends React.Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: 'GET_TRACKS' });
  }
  render() {
    return (
      <Scroll.Element name="tracks">
        <Block className={styles.block}>
          <BlockHeader title="TRACKS" />
          <Row className="junction_tracks" center="xs">
            {this.props.tracks.map((track, i) => (
              <Col xs={12} md={6} key={i} className={styles.trackbox}>
                <img
                  src="https://staging.hackjunction.com/wp-content/uploads/2017/08/elisa.png"
                  className="responsive"
                  alt=""
                />
              </Col>
            ))}
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

Tracks.propTypes = {
  dispatch: PropTypes.func,
  tracks: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || []
  };
}

export default connect(mapStateToProps)(Tracks);
