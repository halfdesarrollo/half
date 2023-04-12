import { ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Navbar from '../components/Navbar';
// components

import SpecialHalf from '../components/SpecialHalf';
import Search from '../components/Search';
import TitlePageLocation from '../components/TitlePageLocation';
import WelcomeUser from '../components/WelcomeUser';
import StartBooking from '../components/StartBooking';
import Categories from '../components/Categories';
import NearMe from '../components/NearMe';
import MiniatureRestaurant from '../components/MiniatureRestaurant';

export const MainMenuScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePageLocation />
      <ScrollView contentContainerStyle={styles.scroll}>
        <WelcomeUser />
        <Search />
        <StartBooking />
        <View style={styles.end}>
          <SpecialHalf />
        </View>
        <Categories />
        <NearMe />
        <MiniatureRestaurant />
      </ScrollView>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('100.00%'),
    height: hp('100.00%'),
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 15,
  },
  scroll: {
    gap: 15,
    alignItems: 'center',
    height: hp('120.00%'),
  },
  end: {
    alignItems: 'flex-end',
    width: wp('100.00%'),
  },
});
