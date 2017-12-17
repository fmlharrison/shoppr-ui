import React from "react";
import { StyleSheet, Text, View } from "react-native";
class AppRoot extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: "Felix",
        };
    }
    render() {
        return (<View style={styles.container}>
        <Text style={styles.text}>
          Welcome {this.state.name}! How are you feeling today?
        </Text>
      </View>);
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
//# sourceMappingURL=AppRoot.js.map