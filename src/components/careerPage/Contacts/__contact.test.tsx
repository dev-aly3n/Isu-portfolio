import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { RefObject } from "react";
import Contact from "./Contact";

const contactData = {
    site: "google",
    username: "goleGole",
    logo:"/media/logos/instagram.jpg",
    link:"https://instagram.com"
}

describe("career/contacts", () => {
  it("snap", () => {
    const { container } = render(<Contact contact={contactData} />);
    expect(container).toMatchSnapshot();
  });
});
