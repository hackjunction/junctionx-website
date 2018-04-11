import { call, put } from 'redux-saga/effects';
import ApiPosts from '../api/posts';

// get all the post from wordpress
export function* getPartners() {
  const partners = yield call(ApiPosts.getPartners);

  // save the tracks in state
  yield put({
    type: 'GET_PARTNERS_SAVE',
    partners: partners.data
  });
}
