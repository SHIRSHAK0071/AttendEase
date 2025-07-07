import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import colors from '../constants/color';

const DrawerMenuScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.overlay}>
      <View style={styles.menuContainer}>
        {[
          'Profile',
          'Your Routine',
          'Edit Subjects',
          'Edit Your Class Details',
          'Settings',
          'Log Out',
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/images/close.png')}
          style={styles.closeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerMenuScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuContainer: {
    width: '100%',
  },
  menuItem: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryBlue,
  },
  closeButton: {
    marginTop: 30,
  },
  closeIcon: {
    width: 40,
    height: 40,
  },
});
