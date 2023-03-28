import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  login_topLogo: {
    backgroundColor: "white",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  image_logo: {
    width: 290,
    height: 100,
    resizeMode: "contain",
  },
  image_eclipseTop: {
    backgroundColor: "#FFAD3F",
    position: "absolute",
    top: -240,
    width: 400,
    height: 300,
    borderRadius: 50,
  },
  image_eclipseBot: {
    backgroundColor: "#87BE56",
    position: "absolute",
    bottom: -360,
    right: -75,
    width: 500,
    height: 300,
    borderRadius: 100,
  },

  inputs_container: {
    height: Dimensions.get("window").height / 2.5,
    backgroundColor: "white",
    width: "90%",
    borderTopColor: "#A4A4A4",
    borderTopWidth: 1,
  },
  button: {
    backgroundColor: "#87BE56",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },

  inputs: {
    borderWidth: 1,
    borderColor: "#A4A4A4",
    marginHorizontal: 5,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  socialMedia_container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    bottom: -60,
  },

  socialMedia_logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    margin: 10,
  },
});
