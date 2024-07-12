import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Colors } from "@/constants/Colors";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const Signup = ({ navigation, isDarkMode }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const activeTheme = isDarkMode ? DarkTheme : DefaultTheme;

  useEffect(() => {
    // Handle any side-effects related to dark mode changes here
  }, [isDarkMode]);

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleSignup = () => {
    console.log("Signing up");
    // Add your signup logic here
  };

  const borderColor = isDarkMode ? Colors.lightBorder : Colors.darkBorder; // Explicitly set border color

  return (
    <TouchableWithoutFeedback>
      <SafeAreaView style={{ flex: 1, backgroundColor: activeTheme.colors.background }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color: activeTheme.colors.text}]}>Create Account</Text>
            <Text style={[styles.subtitle, {color: activeTheme.colors.text}]}>Connect with your friends today!</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.label, {color: activeTheme.colors.text}]}>First name</Text>
            <View style={[styles.inputField, {borderColor}]}>
              <TextInput
                placeholder="Enter your first name"
                placeholderTextColor={activeTheme.colors.text}
                keyboardType="default"
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: activeTheme.colors.text,
                }}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.label,{color: activeTheme.colors.text}]}>Last name</Text>
            <View style={[styles.inputField,{borderColor}]}>
              <TextInput
                placeholder="Enter your last name"
                placeholderTextColor={activeTheme.colors.text}
                keyboardType="default"
                style={[styles.input, { color: activeTheme.colors.text }]}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.label, {color: activeTheme.colors.text}]}>Email address</Text>
            <View style={[styles.inputField, {borderColor}]}>
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={activeTheme.colors.text}
                keyboardType="email-address"
                style={[styles.input, { color: activeTheme.colors.text }]}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.label, {color: activeTheme.colors.text}]}>Mobile number</Text>
            <View style={[styles.inputNumber, { borderColor }]}>
              <TextInput
                placeholder="+250"
                placeholderTextColor={activeTheme.colors.text}
                keyboardType="numeric"
                style={[styles.inputCode, { color: activeTheme.colors.text }]}
              />
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor={activeTheme.colors.text}
                keyboardType="numeric"
                style={[styles.input, { color: activeTheme.colors.text }]}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.label, {color: activeTheme.colors.text}]}>Password</Text>
            <View style={[styles.inputField, { borderColor }]}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={activeTheme.colors.text}
                secureTextEntry={!isPasswordShown}
                style={[styles.input, { color: activeTheme.colors.text }]}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.eyeIcon}
              >
                <Ionicons name={isPasswordShown ? "eye" : "eye-off"} size={24} color={activeTheme.colors.text} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? Colors.blue : Colors.grey}
            />
            <Text style={[styles.checkboxLabel, {color: activeTheme.colors.text}]}>I agree to the terms and conditions</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Sign Up" onPress={handleSignup} color={isDarkMode ? Colors.white : Colors.blue} />
          </View>

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={[styles.separatorText,{color: activeTheme.colors.text}]}>or Sign up with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={[styles.socialButton, {borderColor}]}>
              <Image
                source={require("@/assets/images/facebook.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={[styles.socialText, {color: activeTheme.colors.text}]}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialButton, { borderColor }]}>
              <Image
                source={require("@/assets/images/google-logo-9808.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={[styles.socialText, {color: activeTheme.colors.text}]}>Google</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginContainer}>
            <Text style={[styles.loginText, {color: activeTheme.colors.text}]}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={[styles.loginLink, {color: activeTheme.colors.text}]}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 22,
  },
  titleContainer: {
    marginBottom: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 8,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 8,
  },
  inputNumber: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 22,
  },
  inputCode: {
    width: "12%",
    borderRightWidth: 1,
    borderLeftColor: Colors.grey,
    height: "100%",
    marginRight: 8,
    textAlign: "center",
  },
  input: {
    flex: 1,
    textAlign: "left",
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
    marginBottom: 12,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  buttonContainer: {
    marginVertical: 12,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 22,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.grey,
    marginHorizontal: 10,
  },
  separatorText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },
  socialButton: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 52,
    borderWidth: 1,
    marginRight: 4,
    borderRadius: 10,
  },
  socialIcon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  socialText: {
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 22,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default Signup;
