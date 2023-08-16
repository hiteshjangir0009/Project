/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {ViewPropTypes} from 'deprecated-react-native-prop-types'

AppRegistry.registerComponent(appName, () => App);
