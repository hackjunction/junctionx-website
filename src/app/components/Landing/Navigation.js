import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './Navigation.c.scss';

class Navigation extends React.Component {
  render() {
    return (
      <Row className={styles.linkRow} center="xs">
        <Col className={styles.linkButton} xs={2}>
          <Scroll.Link activeClass="active" to="partners" offset={-30} spy smooth duration={500}>
            Partners
          </Scroll.Link>
        </Col>
        <Col className={styles.linkButton} xs={2}>
          <Scroll.Link activeClass="active" to="schedule" offset={-30} spy smooth duration={500}>
            Schedule
          </Scroll.Link>
        </Col>
        <Col className={styles.linkButton} xs={2}>
          <Scroll.Link className={styles.link} activeClass="active" to="tracks" offset={-30} spy smooth duration={500}>
            Tracks
          </Scroll.Link>
        </Col>
        {this.props.sections.map((section, i) => (
          <Col className={styles.linkButton} xs={2} key={i}>
            <Scroll.Link to={section.slug} offset={-30} spy smooth duration={500}>
              {section.name}
            </Scroll.Link>
          </Col>
        ))}
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.sections || []
  };
}

Navigation.propTypes = {
  sections: PropTypes.array
};
export default connect(mapStateToProps)(Navigation);
