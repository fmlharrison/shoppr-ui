import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

var shoppingCart = require("../public/images/Shopping-Cart-Icon.png");

interface IProps { }

interface IState {
  name: string;
  emotion: string;
}

class AppRoot extends React.Component<IProps, IState> {
  public state = {
    name: "Harry",
    emotion: "angry"
  };

  public render() {
    return (
      <View style={styles.container}>
        <Image source={shoppingCart} style={styles.image} />
      </View>
    );
  }
}

export default AppRoot;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
