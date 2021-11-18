interface props {
  skill: { name: string; icon: string; perc: number };
  index: number;
}

const Skill: React.FC<props> = ({ skill, index }) => {

  return (
    <div className="relative flex justify-between items-center bg-gray-600 rounded-full w-[46%] mx-5 h-12  my-2 overflow-hidden">
      <h3 className="w-36 h-full bg-gray-800 flex justify-center items-center">{skill.name}</h3>
      <div className="relative flex w-full h-full bg-gray-500">
        <div className="absolute top-[50%] mt-[-10px] left-0  h-5 bg-black rounded-r-full"
        style={{width:`${skill.perc}%`}}></div>
      </div>
    </div>
  );
};

export default Skill;
