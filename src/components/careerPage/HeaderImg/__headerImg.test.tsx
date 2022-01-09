import { render, screen } from "@testing-library/react";
import HeaderImg from ".";
import React, { useRef } from "react";
import { RefObject } from "react";

const ref = new Object() as RefObject<HTMLDivElement>;
const allRefs = {
  bioRef: ref,
  eduRef: ref,
  skillsRef: ref,
  contactRef: ref,
};

describe("career/Skill", () => {
  it("render heads", () => {
    render(<HeaderImg allRefs={allRefs} />);
    const skillHead = screen.getByText("Education");
    expect(skillHead).toBeInTheDocument();
  });
});
