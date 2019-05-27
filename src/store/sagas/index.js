import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '~/store/ducks/podcasts';
import { load } from './podcasts';
import { init } from './player';

export default function* rootSaga() {
  yield all([init(), takeLatest(PodcastsTypes.LOAD_REQUEST, load)]);
}
