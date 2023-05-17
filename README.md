# gerald-challlenge

This app is a React Native application that uses the React Navigation library for navigation and routing. It creates a multi-level navigation structure with a bottom tab navigator and a drawer navigator.

# Navigation 
The app sets up the necessary navigators using the createDrawerNavigator, createBottomTabNavigator, and createStackNavigator functions from the React Navigation library. Three navigators are created: Drawer, Tab, and Stack.

## HomeStack
This component represents a stack navigator used for the screens Screen1 and Screen2. It sets the screen options to hide the header.

## CustomDrawerContent 
This component serves as the custom content for the drawer navigator. It handles the rendering of the drawer items and their corresponding actions. It also loads custom fonts using expo-font. The selected item is tracked using state (selectedItem) and styled accordingly. The component returns a styled drawer content view with a title, menu items, and a sign-out option.

##ContentScreen 

This component is a screen that displays the screenName received as a parameter. It is used to render the content screen when navigating from the drawer menu.

## TabNavigator
This component represents the bottom tab navigator. It consists of two screens: Home (using the HomeStack component) and Contact. The header is hidden for all screens within the tab navigator.


# Execution 

1. Clone the project
2. Add dependencies via a package manager (e.g yarn use the yarn command)
3. Run expo start
4. Type a to run on android device or i to ios
