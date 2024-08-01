import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text, useColorScheme } from 'react-native';
import * as Battery from 'expo-battery';
import Toast from 'react-native-toast-message';

const BatteryMonitor = ({ isDarkMode }) => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch initial battery level
    const fetchBatteryLevel = async () => {
      try {
        const level = await Battery.getBatteryLevelAsync();
        if (level !== null && level !== undefined) {
          setBatteryLevel(level);
          showToast(level);
        } else {
          throw new Error('Battery level is not available.');
        }
      } catch (error) {
        console.error('Failed to fetch battery level:', error);
        setError(error.message);
        showToast(null); // Handle error
      }
    };

    fetchBatteryLevel();

    // Subscribe to battery level changes
    const batterySubscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      if (batteryLevel !== null && batteryLevel !== undefined) {
        setBatteryLevel(batteryLevel);
        showToast(batteryLevel);
      } else {
        setError('Battery level is not available.');
        showToast(null); // Handle error
      }
    });

    // Clean up the listener on component unmount
    return () => batterySubscription.remove();
  }, []);

  const showToast = (batteryLevel) => {
    let text1;
    let text2;
    let backgroundColor;

    if (batteryLevel !== null && batteryLevel !== undefined) {
      text1 = batteryLevel >= 0.8 ? 'Battery High' : 'Battery Low';
      text2 = `Battery level is at ${Math.round(batteryLevel * 100)}%`;
      backgroundColor = batteryLevel >= 0.8 ? '#28a745' : '#dc3545'; // Green for high, Red for low
    } else {
      text1 = 'Battery Info Unavailable';
      text2 = 'Unable to retrieve battery level information.';
      backgroundColor = '#dc3545'; // Red for error
    }

    Toast.show({
      type: batteryLevel !== null && batteryLevel !== undefined ? (batteryLevel >= 0.8 ? 'success' : 'error') : 'error',
      position: 'top',
      text1: text1,
      text2: text2,
      visibilityTime: 4000,
      backgroundColor: backgroundColor,
      textColor: '#fff', // Text color to be white for contrast
    });
  };

  const checkBatteryStatus = async () => {
    try {
      const level = await Battery.getBatteryLevelAsync();
      if (level !== null && level !== undefined) {
        setBatteryLevel(level);
        showToast(level);
      } else {
        throw new Error('Battery level is not available.');
      }
    } catch (error) {
      console.error('Failed to fetch battery level:', error);
      setError(error.message);
      showToast(null); // Handle error
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000', marginBottom: 20 }}>
        {error ? `Error: ${error}` : `Current Battery Level: ${batteryLevel !== null ? `${Math.round(batteryLevel * 100)}%` : 'Loading...'}`}
      </Text>
      <Button onPress={checkBatteryStatus} title='Check Battery' color={isDarkMode ? '#fff' : '#000'} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BatteryMonitor;
