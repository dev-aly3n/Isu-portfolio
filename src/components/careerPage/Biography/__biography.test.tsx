import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { RefObject } from "react";
import Biography from ".";

const ref = React.createRef<HTMLDivElement>();


describe("career/Biography", () => {
  it("snap", () => {
    const { container } = render(<Biography bioRef={ref} />);
    expect(container).toMatchSnapshot();
  });
});
