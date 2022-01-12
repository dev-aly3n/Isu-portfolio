import { render, screen } from "@testing-library/react";
import EduList from "../EduList";
import { skillMock } from "../../../__mock__";
import { RefObject } from "react";

const ref = new Object() as RefObject<HTMLDivElement>;

describe("career/Edu", () => {
  it("eduList snap", ()=>{
    const {container} = render(<EduList eduRef={ref} />)
    expect(container).toMatchSnapshot();
  })
});