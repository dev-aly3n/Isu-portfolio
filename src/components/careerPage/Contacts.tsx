const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col w-8/12 mx-auto my-10">
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto">Contacts</h2>
      <div className="flex flex-wrap">
        <a
          href=""
          target="_blank"
          className="flex justify-between h-24 bg-primary-300/80 pr-5 rounded-full overflow-hidden"
        >
          <img
            src="/media/logos/typescript.png"
            className="w-full h-[95%] object-cover object-center rounded-full ml-0.5 mt-0.5"
          />
          <div className="flex flex-col ml-2 h-full justify-around  pr-2">
            <h4 className="text-3xl font-bold">Linkdin</h4>
            <p className="text-lg font-medium">usernameusername</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
