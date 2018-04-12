import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getSchedule() {
  const schedule = yield call(ApiPosts.getSchedule);

  // save the tracks in state
  yield put({
    type: 'GET_SCHEDULE_SAVE',
    schedule: schedule.data
  });
}
