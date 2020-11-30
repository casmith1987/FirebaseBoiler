import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function HomeScreen(props) {
  const userID = props.extraData.id;
  const restaurantRef = firebase
    .firestore()
    .collection('restaurants')
    .doc(userID);

  let unsubscribe;

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        if (unsubscribe) unsubscribe();
        props.setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text>LOGGED IN!</Text>
      </View>
    </View>
  );
}
