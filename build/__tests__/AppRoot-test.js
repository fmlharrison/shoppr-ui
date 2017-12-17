import "react-native";
import React from "react";
import AppRoot from "../AppRoot";
import { create } from "react-test-renderer";
test("renders correctly", () => {
    const tree = create(<AppRoot />).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=AppRoot-test.js.map