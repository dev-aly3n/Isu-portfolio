interface props {
  skill: { name: string; icon: string; perc: number };
  index: number;
}

const Skill: React.FC<props> = ({ skill, index }) => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <h3>{skill.name}</h3>
      <div className="relative"></div>
    </div>
  );
};

export default Skill;
