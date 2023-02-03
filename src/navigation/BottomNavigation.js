// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import {Colors, hp} from '../common/constants'
import BagScreen from '../screens/BagScreen';
import ProfileScreen from '../screens/ProfileScreen';
// (...)

export default function BottomNavigation() {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({  
          headerShown:false,  
          tabBarShowLabel : false,  
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Heart') {
              iconName = 'heart';
            } else if (route.name === 'Bag') {
                iconName = 'shopping-bag';
            } else if (route.name === 'Profile') {
                iconName = 'user';
            }

            // You can return any component that you like here!
            return <Entypo name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.SECONDARY,
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarStyle: {
            paddingVertical:hp(0.5),
             borderTopRightRadius:50,
             borderTopLeftRadius:50,
            backgroundColor:'#fff',
            position:'absolute'
            },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Heart" component={FavoriteScreen} />
        <Tab.Screen name="Bag" component={BagScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}