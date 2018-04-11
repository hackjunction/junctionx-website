import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getAllTracks } from './tracks';
import { getPartners } from './partners';
import { getEvent } from './event';

// main saga generators
export default function* sagas() {
  yield [fork(takeLatest, 'GET_TRACKS', getAllTracks)];
  yield [fork(takeLatest, 'GET_EVENT', getEvent)];
  yield [fork(takeLatest, 'GET_PARTNERS', getPartners)];
}
