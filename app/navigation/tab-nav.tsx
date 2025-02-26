import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';

import RootStack from './root-stack';

import colors from '../utils/global_colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Favorites} from '../screens';

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = route.name === 'home' ? 'roofing' : 'favorite-border';

          return (
            <MaterialIcons
              name={iconName}
              size={22}
              color={focused ? colors.primary : 'gray'}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarOptions: {
          activeTintColor: colors.primary,
          labelStyle: {
            fontSize: 16,
            fontFamily: 'Mulish-Regular',
          },
        },
      })}>
      <Tab.Screen
        name="home"
        component={RootStack}
        options={{title: 'Inicio', headerShown: false}}
      />
      <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{title: 'Favoritos', headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
