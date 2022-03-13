/**
 * @format
 */

import {AppRegistry, LogBox, TouchableOpacity} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true);

TouchableOpacity.defaultProps = {
  ...(TouchableOpacity.defaultProps || {}),
  activeOpacity: 0.6,
};

AppRegistry.registerComponent(appName, () => App);
