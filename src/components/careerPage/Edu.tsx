const Edu: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center">
        <img src="/media/logos/kntu.png" className="block w-56" />
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold w-96 mb-10">
            Khaje Nasir Toosi University Of Technology
          </h3>
          <p>2016-2020 Bachelor Degree - Aerospace Engineering</p>
        </div>
      </div>
      <div className="w-full h-1 bg-white" />
      <div className="flex flex-col m-2 p-5">
      K. N. Toosi University of Technology, made up of eleven academic faculties, opens doors to top talents in engineering and science. It brings together all levels of education and offers innovative training to its 7000|+ students.
      </div>
    </div>
  );
};

export default Edu;
