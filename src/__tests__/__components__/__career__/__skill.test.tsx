import { render, screen } from "@testing-library/react";
import Skill from "../../../components/careerPage/Skill";
import { skillMock } from "../../../__mock__";

const eduRef = document.getElementsByClassName("w-full");
describe("careerPage", () => {
  it("render education heading", () => {
    render(<Skill skill={skillMock} />);

    const eduHeading = screen.getByText("Javascript");

    expect(eduHeading).toBeInTheDocument();
  });
});
