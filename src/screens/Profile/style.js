// style.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutApp: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  nim: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
