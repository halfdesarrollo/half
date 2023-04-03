import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Dimensions } from "react-native";
import TitlePageLocation from "./TitlePageLocation";

const BackgroundCard = () => {
  return (
    <SafeAreaView>
      <TitlePageLocation />
      <View style={styles.backgroundCard_container}>
        <View style={styles.backgroundCard_top}>
          
        </View>
        <Text>BackgroundCard</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundCard_container: {
    backgroundColor: "red",
    height: Dimensions.get("window").height / 3,
  },
  backgroundCard_top: {
    backgroundColor: "blue",
    height: "50%",
  },
});

export default BackgroundCard;
