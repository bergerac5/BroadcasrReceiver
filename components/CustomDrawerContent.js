// CustomDrawerContent.js

import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Image, Text, StyleSheet, Switch } from "react-native";
import { Colors } from "@/constants/Colors";

const CustomDrawerContent = (props) => {
  const { toggleDarkMode, isDarkMode } = props;

  const toggleSwitch = () => {
    toggleDarkMode();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/leaf.jpg")}
          style={styles.photo}
        />
        <Text style={styles.headerText}>Bergerac</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    marginVertical: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerText: {
    marginTop: 10,
    fontSize: 18,
    color: Colors.bluewhite,
    marginLeft: 5
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: '115%'
  },
  switchText: {
    fontSize: 16,
  },
});

export default CustomDrawerContent;
