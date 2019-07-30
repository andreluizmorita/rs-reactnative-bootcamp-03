import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import PodcastsActions from '~/store/ducks/podcasts';

export function* load() {
  try {
    // const response = yield call(api.get, 'podcasts');
    const response = yield call(api.get, '5d3b26703000002d00a29ff2');
    console.log(response);
    yield put(PodcastsActions.loadSuccess(response.data));
  } catch (err) {
    yield put(PodcastsActions.loadFailure());
  }
}
