import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Profile from './src/pages/profile';
import Details from './src/pages/details'
import Explore from './src/pages/explore';

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile, navigationOptions:({header: null})},
  Details: { screen: Details, navigationOptions:({header: null})},
});

const ExploreStack = createStackNavigator({
  Explore: { screen: Explore, navigationOptions:({header: null})},
});

export default createAppContainer(createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Explore: ExploreStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#673AB7',
      inactiveBackgroundColor: '#673AB7',
      labelStyle: {fontSize: 16, marginBottom: 12}
    },
  }
));