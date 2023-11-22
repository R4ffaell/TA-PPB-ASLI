import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Simulate some loading time and navigate to the next screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate('splash.gif'); // Replace 'Main' with the screen you want to navigate to
    }, 1000);

    // Clear the timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require('../../../assets/icons/splash.gif')} />
    </View>
  );
}

