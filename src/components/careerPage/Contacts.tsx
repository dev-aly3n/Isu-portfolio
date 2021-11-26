import Contact from "./Contact";

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col w-8/12 mx-auto my-10">
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto">Contacts</h2>
      <Contact />
    </div>
  );
};

export default Contacts;
