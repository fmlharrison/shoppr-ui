import "react-native";
import React from "react";
import AppRoot from "../AppRoot";
import renderer from "react-test-renderer";

test("AppRoot renders correctly", () => {
    const appRoot = <AppRoot />
    expect(renderer.create(appRoot)).toMatchSnapshot();
})