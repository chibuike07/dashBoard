import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import Button from "../Components/LandingPageLeftView/UserRequestButton";
Enzyme.configure({ Adapter: new Adapter() });

describe("Test Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack} text="male users" />);
    button.find("#male").simulate("click");
    console.log("ok");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
