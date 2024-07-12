import { View, Text } from 'react-native';
import React from 'react';
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default function About({ isDarkMode }) {
  const activeTheme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <View style={{ flex: 1, backgroundColor: activeTheme.colors.background }}>
      <Text style={{ color: activeTheme.colors.text }}>About</Text>
    </View>
  );
}
