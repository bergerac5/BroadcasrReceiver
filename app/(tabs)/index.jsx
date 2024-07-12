import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Layout from './_layout';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const HomeScreen = () => {
  const [isConnected, setIsConnected] = useState(true); // Assuming initially connected

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const showToast = () => {
    Toast.show({
      type: isConnected ? 'success' : 'error',
      text1: isConnected ? 'Connected' : 'No Internet Connection',
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  return (
    <>
      <Layout />
      <View style={{ padding: 20 }}>
        <Button title="Check Connection" onPress={showToast} />
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default HomeScreen;
