/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import "./src/i18n/i18n";
AppRegistry.registerComponent(appName, () => App);
