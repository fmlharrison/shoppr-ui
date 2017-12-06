import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: "Felix"
        };
    }
    render() {
        return (<View style={styles.container}>
        <Text style={styles.text}>
          Welcome {this.state.name}! How are you?
        </Text>
      </View>);
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
//# sourceMappingURL=AppRoot.js.map