
import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const handleScroll = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollViewRef = useRef(null);

  const data = [
    "https://source.unsplash.com/1600x900/?nature",
    "https://source.unsplash.com/1600x900/?water",
    "https://source.unsplash.com/1600x900/?mountains",
    "https://source.unsplash.com/1600x900/?door",
  ];


  const handleButtonPress = (index) => {
    setActiveIndex(index);
    const x = index * (SCREEN_WIDTH - 225);
    scrollViewRef.current.scrollTo({ x: x, y: 0, animated: true });
  };

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.borderContainer}>
        <View style={styles.rfBorder} />
          <Text style={styles.text}>Especiales Half</Text>
        <View style={styles.rfBorder} />
    </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        // showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const slideWidth = event.nativeEvent.layoutMeasurement.width - 25;
          const offset = event.nativeEvent.contentOffset.x;
          setActiveIndex(Math.floor(offset / slideWidth));
        }}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slideContainer}>
            <Image source={{ uri: item }} style={styles.image} />
            <Text style={styles.slideText}>{}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              activeIndex === index && styles.activeButton,
            ]}
            onPress={() => handleButtonPress(index)}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: wp("100.00%"),

    // width: SCREEN_WIDTH,
    marginTop: 200,
    overflow: "hidden",
  },
  slideContainer: {
    marginRight: 25,
    display: "flex",
  },
  slideText: {
    fontSize: 1,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  activeButton: {
    backgroundColor: "black",
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    borderWidth: 1,
    borderRadius: 10,
    width: 250,
    height: 100,
    resizeMode: "cover",
  },
  indicator: {
    width: 35,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: "#87BE56",
  },

  borderContainer: {
    display:"flex",
    justifyContent:"center",
    flexDirection: "row",
    alignItems: "center",
  },
  rfBorder: {
    height: 1,
    width: 77,
    backgroundColor: "#FFAD3F",
  },
  text: { 
    fontStyle: 'normal',
    marginLeft: 10,
    marginRight: 10,
    color: "#87BE56",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 36,
  },
});

export default handleScroll;
