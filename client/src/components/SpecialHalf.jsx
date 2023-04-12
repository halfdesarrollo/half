
import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const SpecialHalf = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollViewRef = useRef(null);


  const data = [
    {
      name: 'Image 1',
      uri: require('../../assets/carrS1.png')
    },
    {
      name: 'Image 2',
      uri: require('../../assets/carrS2.png')
    },
    {
      name: 'Image 3',
      uri: require('../../assets/carrS1.png')
    }
  ];
  const handleButtonPress = (index) => {
    setActiveIndex(index);
    const x = index * 220;
    scrollViewRef.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / 220);
    setActiveIndex(index);
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
        pagingEnabled={true}
        snapToInterval={220}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slideContainer}>
            <Image source={item.uri} />
            {/* <Image source={{ uri: item }} style={styles.image} /> */}
            <Text style={styles.slideText}>{ }</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              // activeIndex === index ? styles.activeButton : null
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
    width: wp(95),
    overflow: "hidden",
    borderRadius: 8
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
    height: 4,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: "#87BE56",
  },

  borderContainer: {
    display: "flex",
    justifyContent: "center",
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

export default SpecialHalf;
