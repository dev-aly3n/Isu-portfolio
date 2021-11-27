// libs
// components
import Contact from "./Contact";
// hooks
// store
import {contactList} from '../../store/allData'
// utils & animation

const Contacts: React.FC = () => {
  return (
    <div >
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto">Contacts</h2>
      <div className="flex flex-wrap justify-center items-center w-full">
      {contactList.map((cont)=>{
          return <Contact contact={cont} />
        })}
        </div>
    </div>
  );
};

export default Contacts;
