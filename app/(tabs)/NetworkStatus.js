import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, useColorScheme } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const NetworkStatusChecker = ({ isDarkMode }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Fetch initial network state
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
      showToast(state.isConnected);
    });

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected !== isConnected) {
        setIsConnected(state.isConnected);
        showToast(state.isConnected);
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [isConnected]);

  const showToast = (isConnected) => {
    Toast.show({
      type: isConnected ? 'success' : 'error',
      position: 'top',
      text1: isConnected ? 'Internet Connected' : 'No Internet Connection',
      visibilityTime: 4000,
      backgroundColor: isConnected ? '#28a745' : '#dc3545', // Green for connected, Red for disconnected
      textColor: '#fff', // Text color to be white for contrast
    });
  };

  const checkNetworkStatus = () => {
    NetInfo.fetch().then(state => {
      showToast(state.isConnected);
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Button onPress={checkNetworkStatus} title='Check Network' color={isDarkMode ? '#fff' : '#000'} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Remove any border or grey background
    borderWidth: 0, // Ensure there's no border
    borderColor: 'transparent', // Ensure border color is transparent
    backgroundColor: 'transparent', // Ensure background color is transparent (if needed)
    margin: 0, // Ensure no margin
    padding: 0, // Ensure no padding
  },
});

export default NetworkStatusChecker;
