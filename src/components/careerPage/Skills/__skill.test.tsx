import { render, screen } from "@testing-library/react";
import Skill from "./Skill";
import { skillMock } from "../../../__mock__";

describe("career/Skill", () => {
  it("render name and img", () => {
    render(<Skill skill={skillMock} />);
    const skillName = screen.getByTestId('heading');
    const skillImg = screen.getByTestId('skill-img');
    expect(skillName).toBeInTheDocument();
    expect(skillImg).toBeInTheDocument();
  });
});
