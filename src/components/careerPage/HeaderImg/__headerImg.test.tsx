import { render, screen } from "@testing-library/react";
import HeaderImg from ".";
import React, { useRef } from "react";
import { RefObject } from "react";

const ref = React.createRef<HTMLDivElement>();
const allRefs = {
  bioRef: ref,
  eduRef: ref,
  skillsRef: ref,
  contactRef: ref,
};

describe("career/headerImg", () => {
  it("snap", () => {
   const {container} = render(<HeaderImg allRefs={allRefs} />);
   expect(container).toMatchSnapshot();
  });
});
