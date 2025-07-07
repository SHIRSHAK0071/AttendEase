import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet, } from 'react-native';
import SubjectCard from '../components/SubjectCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import * as ScreenOrientation from 'expo-screen-orientation';
import colors from '../constants/color';
// import logo from '../assets/AttendEase Logo(Other Screens).png';

ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);


const DashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/AttendEase Logo(Other Screens).png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => navigation.navigate('DrawerMenu')}>
          <Image
            source={require('../assets/icon.png')}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {[...Array(4)].map((_, idx) => (
          <SubjectCard
            key={idx}
            subject="Analog Communication"
            code="EC-202"
            teacher="Sandeep Singh"
            attended={7}
            total={13}
            percentage={78}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: -20,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  cardsContainer: {
    gap: 16,
    paddingBottom: 30,
  },
});
