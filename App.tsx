import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import * as Font from 'expo-font';

import Contact from './screens/Contact';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>
);

const CustomDrawerContent = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState('Start');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'PTSerif': require('./assets/fonts/PTserif/PTSerif-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const handleMenuPress = (screenName) => {
    setSelectedItem(screenName);
    navigation.navigate('Content', { screenName });
  };

  const getSelectedItemStyle = (item) => {
    if (item === selectedItem) {
      return {
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        color: 'red',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
      };
    }
    return {};
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DrawerContentScrollView style={{ backgroundColor: '#05122d' }}>
      <Text style={{ fontFamily: 'PTSerif', fontSize: 25, fontWeight: 'bold', marginVertical: 20, marginLeft: 10, color: 'white' }}>
        Beka
      </Text>
      <DrawerItem
        label="Start"
        onPress={() => handleMenuPress('Start')}
        labelStyle={[{ color: 'white', fontSize: 20, fontFamily: 'PTSerif' }, getSelectedItemStyle('Start')]}
      />
      <DrawerItem
        label="Your Cart"
        onPress={() => handleMenuPress('Your Cart')}
        labelStyle={[{ color: 'white', fontSize: 20, fontFamily: 'PTSerif' }, getSelectedItemStyle('Your Cart')]}
      />
      <DrawerItem
        label="Favourites"
        onPress={() => handleMenuPress('Favourites')}
        labelStyle={[{ color: 'white', fontSize: 20, fontFamily: 'PTSerif' }, getSelectedItemStyle('Favourites')]}
      />
      <DrawerItem
        label="Your Orders"
        onPress={() => handleMenuPress('Your Orders')}
        labelStyle={[{ color: 'white', fontSize: 20, fontFamily: 'PTSerif' }, getSelectedItemStyle('Your Orders')]}
      />
      <View
        style={{
          height: 1,
          backgroundColor: 'white',
          marginVertical: 10,
          marginLeft: 20,
          marginRight: 30,
          marginBottom:90,
        }}
      />
      <DrawerItem
        label="Sign Out"
        onPress={() => handleMenuPress('Sign Out')}
        labelStyle={[{ color: 'white', fontSize: 20, fontFamily: 'PTSerif' }, getSelectedItemStyle('Sign Out')]}
      />
    </DrawerContentScrollView>
  );
};

const ContentScreen = ({ route }) => {
  const { screenName } = route.params;

  return (
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginLeft: 10 }}>
      {screenName}
    </Text>
  );
};

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Contact" component={Contact} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="DrawerMenu"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen options={{ title: '' }} name="DrawerMenu" component={TabNavigator} />
      <Drawer.Screen
        name="Content"
        component={ContentScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
