// Profile.js

import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style'; // Import styles from the separate file

// Profile component
const Profile = () => {
  // Sample user data
  const userData = {
    name: 'Anakta Raffaell Tambunan',
    picture: require('../../../assets/icons/goku.jpg'),
    nim: '21120121140085',
    aboutApp: 'Ini adalah aplikasi resep untuk berbagai macam makanan.',
  };

  return (
    <View style={styles.container}>
      <Image source={userData.picture} style={styles.profilePicture} />
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.nim}>{userData.nim}</Text>
      <Text style={styles.aboutApp}>{userData.aboutApp}</Text>
    </View>
  );
};

export default Profile;
