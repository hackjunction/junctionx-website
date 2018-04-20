import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './ContentSections.c.scss';

class ContentSections extends React.Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: 'GET_SECTIONS' });
  }
  render() {
    return (
      <div>
        {this.props.sections.map((section, i) => (
          <Scroll.Element key={i} name={section.slug}>
            <Block className={styles.block}>
              <BlockHeader title={section.name.toUpperCase()} />
              <Row center="xs">
                <Col xs className="start-md">
                  <h1 className={styles.h}>{section.header.toUpperCase()}</h1>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  {section.link_url && (
                    <a className={styles.link} href={section.link_url}>
                      <div className={styles.linkButton}>{section.link_text}</div>
                    </a>
                  )}
                </Col>
                {section.image ? (
                  <Col xs={12} md={4}>
                    <img className={styles.img} src={section.image} alt="" />
                  </Col>
                ) : null}
              </Row>
            </Block>
          </Scroll.Element>
        ))}
      </div>
    );
  }
}

ContentSections.propTypes = {
  dispatch: PropTypes.func,
  sections: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    sections: state.sections || []
  };
}

export default connect(mapStateToProps)(ContentSections);
