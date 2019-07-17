import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import Routes from '~/routes';
import store from '~/store';

import Player from '~/componets/Player';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('9d033903-d8c5-4537-bed1-76886bba25ae');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (notification) => {
    console.tron.log('Notification received: ', notification);
  };

  onOpened = (openResult) => {
    console.tron.log('Message: ', openResult.notification.payload.body);
    console.tron.log('Data: ', openResult.notification.payload.additionalData);
    console.tron.log('isActive: ', openResult.notification.isAppInFocus);
    console.tron.log('openResult: ', openResult);
  };

  onIds = () => {};

  render() {
    return (
      <Provider store={store}>
        <Routes />
        <Player />
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
