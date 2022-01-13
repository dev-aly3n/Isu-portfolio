import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { RefObject } from "react";
import BioChapter from "./BioChapter";


const chap = {
    title: "this is chapter 1",
    desc: "the chapter 1 is a test that we didn't implement yet but we will do in the short future."
}

describe("career/bioChapter", () => {
  it("snap", () => {
    const { container } = render(<BioChapter chap={chap} firstChap={true} />);
    expect(container).toMatchSnapshot();
  });
});
