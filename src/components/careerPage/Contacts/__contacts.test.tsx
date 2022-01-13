import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { RefObject } from "react";
import Contacts from ".";

const ref = React.createRef<HTMLDivElement>();


describe("career/contacts", () => {
  it("snap", () => {
    const { container } = render(<Contacts contactRef={ref} />);
    expect(container).toMatchSnapshot();
  });
});
