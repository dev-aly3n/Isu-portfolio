import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { RefObject } from "react";
import ActivityChart from ".";

const ref = new Object() as RefObject<HTMLDivElement>;


describe("career/contacts", () => {
  it("snap", () => {
    const { container } = render(<ActivityChart />);
    expect(container).toMatchSnapshot();
  });
});
