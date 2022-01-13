import { render, screen } from "@testing-library/react";
import EduList from "../EduList";
import { skillMock } from "../../../__mock__";
import React, { RefObject } from "react";

const ref = React.createRef<HTMLDivElement>();

describe("career/Edu", () => {
  it("eduList snap", ()=>{
    const {container} = render(<EduList eduRef={ref} />)
    expect(container).toMatchSnapshot();
  })
});