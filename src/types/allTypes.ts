import { ReactElement } from "react";

export interface projectType {
  name: string;
  desc: string;
  url: string;
  gitHub: string;
  image: string;
  techs: { name: string; color: string }[];
  fullText:ReactElement<any,any>
}
