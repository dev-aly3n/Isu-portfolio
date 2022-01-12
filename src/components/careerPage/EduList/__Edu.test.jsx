import { render, screen } from "@testing-library/react";
import Edu from "./Edu";
import { skillMock } from "../../../__mock__";

const education = {
  name: "uni of teh",
  field: "mechanics",
  about: "something about uni",
  image: "/media/logos/kntu.png",
};

describe("career/Skill", () => {
  it("skill snap", () => {
    const { container } = render(<Edu education={education} />);
    expect(container).toMatchSnapshot();
  });
});
