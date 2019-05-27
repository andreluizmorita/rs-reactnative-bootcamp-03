import { call } from 'redux-saga/effects';
import TrackPlayer from 'react-native-track-player';

export function* init() {
  yield call(TrackPlayer.setupPlayer);

  TrackPlayer.addEventListener('playerback-track-changed', console.tron.log);
  TrackPlayer.addEventListener('playerback-state', console.tron.log);
}
