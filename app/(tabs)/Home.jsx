import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function Home({ navigation, isDarkMode }) {
  const activeTheme = isDarkMode ? DarkTheme : DefaultTheme;
  const gradientColors = isDarkMode ? [Colors.darkGray, Colors.black] : [Colors.blue, Colors.bluewhite];

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={gradientColors}
    >
      <View style={{ flex: 1 }}>
        <View>
          {/* Add any additional content here */}
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 400,
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: '800',
              color: activeTheme.colors.text,
              textAlign: 'center',
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 60,
              fontWeight: '800',
              color: activeTheme.colors.text,
              textAlign: 'center',
            }}
          >
            To
          </Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: '800',
              color: activeTheme.colors.text,
              textAlign: 'center',
            }}
          >
            My App
          </Text>
          <View
            style={{
              marginTop: 30,
              width: '100%',
            }}
          >
            <Button
              title='Join Now'
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 16, color: activeTheme.colors.text }}>
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={{
                  fontSize: 16,
                  color: activeTheme.colors.text,
                  fontWeight: 'bold',
                  marginLeft: 4,
                }}
              >
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
