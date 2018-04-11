import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getSections() {
  const sections = yield call(ApiPosts.getSections);

  // save the tracks in state
  yield put({
    type: 'GET_SECTIONS_SAVE',
    sections: sections.data
  });
}
