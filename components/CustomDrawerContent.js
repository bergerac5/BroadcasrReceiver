import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Image, Text, StyleSheet, Switch, TouchableOpacity, Alert } from "react-native";
import { Colors } from "@/constants/Colors";
import * as ImagePicker from 'expo-image-picker';

const CustomDrawerContent = (props) => {
  const { toggleDarkMode, isDarkMode } = props;
  const [profileImage, setProfileImage] = useState(null);

  const toggleSwitch = () => {
    toggleDarkMode();
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleTakePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleProfilePicture = () => {
    Alert.alert("Edit Profile Picture", "Choose an option:", [
      { text: "Select from Gallery", onPress: handleImagePicker },
      { text: "Take a Picture", onPress: handleTakePicture },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfilePicture}>
          <Image
            source={profileImage ? { uri: profileImage } : require("../assets/images/leaf.jpg")}
            style={styles.photo}
          />
        </TouchableOpacity>
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
    marginTop: '50%'
  },
  switchText: {
    fontSize: 16,
  },
});

export default CustomDrawerContent;
