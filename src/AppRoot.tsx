import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

interface State {
  name: string
}

export default class App extends React.Component<Props, State> {
  state = {
    name: "Felix"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome {this.state.name}! How are you?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});