import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {}

interface IState {
  name: string;
}

 class AppRoot extends React.Component<IProps, IState> {
  public state = {
    name: "Felix",
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome {this.state.name}! How are you feeling today?
        </Text>
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
});
