import { AppRegistry } from 'react-native';

// @todo remove when RN upstream is fixed
console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

import Root from './src/root.js';

AppRegistry.registerComponent('HotelsProj', () => Root);
