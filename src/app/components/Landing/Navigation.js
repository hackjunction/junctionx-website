import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './Navigation.c.scss';

const NavigationButton = props => (
  <Col xs={12} sm={6} md={3}>
    <Scroll.Link activeClass="active" to={props.to} offset={-30} spy smooth duration={500}>
      <div className={styles.linkButton}>{props.title}</div>
    </Scroll.Link>
  </Col>
);
NavigationButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string
};

class Navigation extends React.Component {
  render() {
    return (
      <Row className={styles.linkRow} center="xs">
        <NavigationButton to="partners" title="Partners" />
        <NavigationButton to="schedule" title="Schedule" />
        <NavigationButton to="tracks" title="Tracks" />
        {this.props.sections.map((section, i) => <NavigationButton to={section.slug} title={section.name} key={i} />)}
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
