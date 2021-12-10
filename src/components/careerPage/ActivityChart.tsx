const ActivityChart: React.FC = () => {
  return (
    <div>
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto text-center mt-5">
        Coding Activity
      </h2>
      <p className="w-10/12">
        This chart just showing the TIME of TYPING code. So it not considering
        the time of thinking, searching at google, watching video about code or
        even reading the docs. Maybe multiply it by 2 or 3 can show my real
        coding activity.
      </p>
      <figure className="w-full  my-10 px-5 md:w-[768px]">
        <embed src="https://wakatime.com/share/@aly3n/7db21f10-1621-4333-8f9b-0a9a49fa6a54.svg"></embed>
      </figure>
      <figure className="w-full  my-10 px-5 md:w-[768px]">
        <embed src="https://wakatime.com/share/@aly3n/7b14775a-13a0-4884-a8f3-a4f40b134860.svg"></embed>
      </figure>
    </div>
  );
};

export default ActivityChart;
