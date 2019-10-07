import React from "react";
import { StyleSheet, View, Image } from "react-native";
var shoppingCart = require("../public/images/Shopping-Cart-Icon.png");
class AppRoot extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: "Harry",
            emotion: "angry"
        };
    }
    render() {
        return (<View style={styles.container}>
        <Image source={shoppingCart} style={styles.image}/>
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
    image: {
        width: 200,
        height: 200,
    },
});
//# sourceMappingURL=AppRoot.js.map