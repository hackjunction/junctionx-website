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
          <Row className={styles.trackDivs} center="xs">
            {this.props.tracks.map((track, i) => (
              <Col xs={12} sm={8} md={6} key={i} className={styles.trackbox}>
                <div className={styles.imgTrack} style={{ background: 'url(' + track.image + ')' }}>
                  <div className={styles.transpr}>
                    <h1 className={styles.title}>{track.title.toUpperCase()}</h1>
                  </div>
                </div>
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
