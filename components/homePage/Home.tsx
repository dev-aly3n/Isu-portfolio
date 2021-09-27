import React from "react";

const Home: React.FC = (): JSX.Element => {
  interface person {
    name: string;
    age: number;
  }
  const pit: person = {
    name: "ali",
    age: 18,
  };

  return (
    <div>
      <div>hello we are in hooommmmmmmmeeeeee body</div>
      <div>we're going to do verrrrrrrrrry interesting stuff interesting </div>
    </div>
  );
};

export default Home;
