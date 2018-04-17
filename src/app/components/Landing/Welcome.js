import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import styles from './Welcome.c.scss';
import Navigation from './Navigation';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

const Welcome = props => (
  <Scroll.Element name="welcome">
    <Block contentClassName={styles.blockContent}>
      <Row className="junction_welcome" middle="xs" center="xs">
        <Col xs={12} md={4} className={styles.welcome}>
          <img src="/images/junctionx_globe.png" alt="" className={styles.welcomeImage} />
        </Col>
        <Col xs={12} md={6} first="md" className="start-md">
          <h1 className={styles.h1Stuff}>{props.header1}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.content1 }} />
        </Col>
        <Col xs={12} md={12}>
          <hr className={styles.separator} />
        </Col>
      </Row>
      <BlockHeader className={styles.subHeader} title={props.header2.toUpperCase()} />
      <Row>
        <p>{props.content2}</p>
      </Row>
      <Row center="xs" middle="xs">
        <Col xs={12} md={4}>
          <h3> HELD IN</h3>
          <h3 className={styles.h3Differ}>{props.city.toUpperCase()}</h3>
          <h3>{props.country.toUpperCase()}</h3>
        </Col>
        <Col xs={12} md={4}>
          <h3 className={styles.h3Differ}>{props.start_date.split('-')[2] + '. -'}</h3>
          <h3 className={styles.h3Differ}>{props.end_date.split('-')[2] + '.' + props.end_date.split('-')[1] + '.'}</h3>
          <h3>{props.end_date.split('-')[0]}</h3>
        </Col>
        <Col xs={12} md={4}>
          <h3>FOR EVERYONE & FOR FREE</h3>
        </Col>
      </Row>
      <Navigation />
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
