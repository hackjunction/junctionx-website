import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getEvent() {
  console.log('event');
  const event = yield call(ApiPosts.getEvent);

  // save the tracks in state
  yield put({
    type: 'GET_EVENT_SAVE',
    event: event.data
  });
}
