import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './Welcome.c.scss';
import Block from '../viewBlocks/Block';

const Welcome = props => (
  <Scroll.Element name="welcome">
    <Block contentClassName={styles.blockContent}>
      <Row className="junction_welcome" middle="xs" center="xs">
        <Col xs={12} md={4} className={styles.welcome}>
          <img src="/images/junctionx_globe.png" alt="" className={styles.welcomeImage} />
        </Col>
        <Col xs={12} md={6} first="md" className="start-md">
          <h1>{props.header1}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.content1 }} />
        </Col>
      </Row>
      <Row>
        <h1>{props.header2}</h1>
        <p>{props.content2}</p>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <p>{props.city}</p>
          <p>{props.country}</p>
        </Col>
        <Col xs={12} md={4}>
          <p>{props.start_date}</p>
          <p>{props.end_date}</p>
        </Col>
        <Col xs={12} md={4}>
          <p>Placeholder text</p>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

Welcome.propTypes = {
  header1: PropTypes.string,
  header2: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string
};
export default Welcome;
