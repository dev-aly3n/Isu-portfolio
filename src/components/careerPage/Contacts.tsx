// libs
import { RefObject } from "react";
// components
import Contact from "./Contact";
// hooks
// store
import {contactList} from '../../store/allData'
// utils & animation

interface props {
  contactRef:RefObject<HTMLDivElement>;
}

const Contacts: React.FC<props> = ({contactRef}) => {
  return (
    <div ref={contactRef}>
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto">Contacts</h2>
      <div className="flex flex-wrap justify-center items-center w-full">
      {contactList.map((cont)=>{
          return <Contact key={cont.logo} contact={cont} />
        })}
        </div>
    </div>
  );
};

export default Contacts;
