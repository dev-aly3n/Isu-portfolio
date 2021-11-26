// libs
// components
import Contact from "./Contact";
// hooks
// store
import {contactList} from '../../store/allData'
// utils & animation

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col w-8/12 mx-auto my-10">
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto">Contacts</h2>
      <div className="flex flex-wrap">
      {contactList.map((cont)=>{
          return <Contact contact={cont} />
        })}
        </div>
    </div>
  );
};

export default Contacts;
