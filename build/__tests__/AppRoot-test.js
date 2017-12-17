import "react-native";
import React from "react";
import AppRoot from "../AppRoot";
import renderer from "react-test-renderer";
test("AppRoot renders correctly", () => {
    expect(renderer.create(<AppRoot />)).toMatchSnapshot();
});
//# sourceMappingURL=AppRoot-test.js.map