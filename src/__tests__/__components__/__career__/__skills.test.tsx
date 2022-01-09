import { render, screen } from "@testing-library/react";
import Skills from "../../../components/careerPage/Skills";
import React,{useRef} from 'react';
import { RefObject } from "react";
 




const ref = new Object() as RefObject<HTMLDivElement>;

describe("career/Skill", () => {

    it("render heads", () => {

        render(<Skills skillsRef={ref} />);
        const skillHead = screen.getByText('Hard Skills');
        expect(skillHead).toBeInTheDocument();
  });

  it("rebder educational skills", ()=> {


    render(<Skills skillsRef={ref} />);
    const skill = screen.getByText("Soft Skills")
    ;

    expect(skill).toBeInTheDocument();
    expect(skill).toBeValid();
    expect(skill).toBeDefined;
  })
});
