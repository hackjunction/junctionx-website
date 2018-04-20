import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './Schedule.c.scss';

class Schedule extends React.Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    if (this.props.schedule.length == 0) {
      this.props.dispatch({ type: 'GET_SCHEDULE' });
    }
  }
  render() {
    console.log('schedule', this.props.schedule);
    if (this.props.schedule.length == 0) return null;
    var events_by_day = {};
    for (var i = 0; i < this.props.schedule.length; i++) {
      var event = this.props.schedule[i];
      console.log(event);
      if (!events_by_day[event.date]) {
        events_by_day[event.date] = [event];
      } else {
        events_by_day[event.date].push(event);
      }
    }
    console.log(events_by_day);
    return (
      <Scroll.Element name="schedule">
        <Block className={styles.block}>
          <BlockHeader title="SCHEDULE" />
          <Row key={i}>
            {Object.entries(events_by_day)
              .sort((a, b) => a[0] > b[0])
              .map((day, i) => (
                <Col key={i} xs={12} md={12} className={styles.name}>
                  <Row>
                    <Col>
                      <h1>{day[0]}</h1>
                    </Col>
                  </Row>
                  {day[1]
                    .sort((a, b) => a.time > b.time)
                    .sort((a, b) => a.suffix > b.suffix)
                    .map((event, i) => (
                      <Row key={i} className={styles.event}>
                        <Col xs={3} sm={1} className={styles.time_1}>
                          {event.time}
                          {event.suffix !== 'None' ? event.suffix : null}
                        </Col>
                        <Col xs={8}>
                          <div className={styles.eventName}>{event.name}</div>
                          {event.description ? (
                            <div
                              className={styles.eventDescription}
                              dangerouslySetInnerHTML={{ __html: event.description }}
                            />
                          ) : null}
                        </Col>
                      </Row>
                    ))}
                </Col>
              ))}
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

Schedule.propTypes = {
  dispatch: PropTypes.func,
  schedule: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    schedule: state.schedule || []
  };
}

export default connect(mapStateToProps)(Schedule);
