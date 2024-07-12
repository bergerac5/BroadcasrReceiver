import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme, View } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import Home from "./Home";
import About from "./About";
import Calculator from "./Calculator";
import SignIn from "./SignIn";
import Signup from "./Signup";
import { Colors } from "@/constants/Colors";

const Drawer = createDrawerNavigator();

const Layout = () => {
  const deviceColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === "dark");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const activeTheme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Drawer.Navigator
          drawerContent={(props) => (
            <CustomDrawerContent
              {...props}
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
          )}
          screenOptions={{
            headerShown: true,
            headerTintColor: activeTheme.colors.text,
            headerStyle: {
              backgroundColor: activeTheme.colors.card,
            },
            drawerActiveTintColor: Colors.bluewhite,
            drawerInactiveTintColor: activeTheme.colors.text,
            drawerStyle: {
              backgroundColor: activeTheme.colors.background,
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerIcon: () => (
                <Ionicons name="home" size={24} color={Colors.bluewhite} />
              ),
            }}
            key={isDarkMode} // This will force re-render when isDarkMode changes
          >
            {({ navigation }) => (
              <Home navigation={navigation} isDarkMode={isDarkMode} />
            )}
          </Drawer.Screen>

          <Drawer.Screen
            name="About"
            options={{
              drawerLabel: 'About',
              title: 'About us',
              drawerIcon: () => <Ionicons name="information-circle" size={24} color={Colors.bluewhite} />,
            }}
            key={isDarkMode} // Force re-render when isDarkMode changes
          >
            {({ navigation }) => (
              <About navigation={navigation} isDarkMode={isDarkMode} />
            )}
          </Drawer.Screen>

          <Drawer.Screen
            name="Calculator"
            component={Calculator}
            options={{
              drawerLabel: "Calculator",
              title: "Calculator",
              drawerIcon: () => (
                <Ionicons
                  name="calculator-sharp"
                  size={24}
                  color={Colors.bluewhite}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="SignIn"
            options={{
              drawerLabel: "Log in",
              title: "Login",
              drawerIcon: () => (
                <FontAwesome
                  name="sign-in"
                  size={24}
                  color={Colors.bluewhite}
                />
              ),
            }}            
          >
            {({ navigation }) => (
              <SignIn navigation={navigation} isDarkMode={isDarkMode} />
            )}
          </Drawer.Screen>
          <Drawer.Screen
            name="Signup"
            options={{
              drawerLabel: "Register",
              title: "Register",
              drawerIcon: () => (
                <Ionicons
                  name="create-sharp"
                  size={24}
                  color={Colors.bluewhite}
                />
              ),
            }}
          >
            {({ navigation }) => (
              <Signup navigation={navigation} isDarkMode={isDarkMode} />
            )} 
          </Drawer.Screen>
        </Drawer.Navigator>
      </View>
    </GestureHandlerRootView>
  );
};

export default Layout;
