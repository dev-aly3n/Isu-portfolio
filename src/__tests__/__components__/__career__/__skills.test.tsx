import { render, screen } from "@testing-library/react";
import Skills from "../../../components/careerPage/Skills";
import React,{useRef} from 'react';
import { RefObject } from "react";
 





describe("career/Skill", () => {

    it("render heads", () => {
    const ref = new Object() as RefObject<HTMLDivElement>;

        render(<Skills skillsRef={ref} />);
    const skillHead = screen.getByText('Hard Skills');
        expect(skillHead).toBeInTheDocument();
  });
});
