interface props {
  skill: { name: string; icon: string; perc: number; color:string; };
  index: number;
}

const Skill: React.FC<props> = ({ skill, index }) => {

  return (
    <div className="relative flex justify-between items-center bg-gray-600 rounded-full w-[46%] mx-5 h-12  my-2">
      <h3 className="w-44 h-full bg-gray-800 flex justify-center items-center rounded-l-full text-sm font-bold">{skill.name}</h3>
      <div className="relative flex w-full h-full bg-gray-500 rounded-r-full">
        <div className="absolute top-[50%] mt-[-10px] left-0  h-5 overflow-hidden rounded-r-full pos-dash-style "
        style={{width:`${skill.perc}%`, backgroundColor:`rgb${skill.color}`}}></div>
        <img src={`/media/logos/${skill.icon}`}
        style={{left:`${skill.perc}%`}} className="absolute top-[50%] mt-[-14px] block h-7 ml-1" />
        {skill.name === "Creativity" &&
        <img src={`/media/logos/explosion.png`}
        style={{left:`100%`}} className="absolute top-[50%] mt-[-30px] block " />
}
      </div>
    </div>
  );
};

export default Skill;
