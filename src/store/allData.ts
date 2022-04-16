import { projectType } from "../types/allTypes";

export const biochapters: { title: string; desc: string }[] = [
  {
    title: "Chapter One: The Beginning",
    desc: "Aly Mohamadi was born on 9 February 1998 in Iran. There is nothing fancy about his family, just a regular one with all problems in the world that a family could has. Anyway he raised and on the very old day at school he watched the movie of 'October Sky' that had been made base on a real story of a book, Rocket Boys. Story is about the life of its author Hoomer Hickam. He was born in very fucked up town that all who was born there, would be miner eventually. But Hoomer after all didn't give up and tried to reach to his dream, being a rocket boy and working in NASA.",
  },
  {
    title: "Chapter Two: The Wish and The Failure",
    desc: "So it's all and this is what happened to very young Aly. He started dreaming about it and he tried to be a rocket boy but in Iran?! His place was more fucked up than Hoomer's town. He went to university and attempted to start with cheaper stuff so made some water rockets and tried to improve them but you know what? He couldn't find a hand-pump that could survive in 20 bar pressure (about 20 times of atmosphere). Yes I know you can't believe it. But it's true. Why, because this country of mullahs has been boycotted. So Aly hadn't the stuff that his friend Julian bought from a store besides of his home in Germany. Anyway he tried even cheaper, Aly created a magazine about Aerospace and named it ASPAD. He made a website with Joomla as he worked with it since he was 14 and a blogger who wrote about rockets and water rockets. He worked on it days and nights. He even set an interview with Hoomer Hickam that eventually Hoomer answered his question very kindly. The website and magazine was so interesting but you know free volunteering works in a country that falling to bottom of poverty is not working. So it's the time for new chapter.",
  },
  {
    title: "Chapter Three: Changing The Career",
    desc: "He started thinking about coding. He searched for the job offers. Aly needed inspiring to start it. Finally he found it. Inspired by growing of this industry and how creativity that he could put on it. So he started to learn. He learned html css and js from w3school. I know I know such a nice place for learning nothing. He wasted one year on w3school besides of his study of aerospace. But after a year he found out that there is better materials and started to learn from an iranian teacher and please let me bang my head against the wall. That was horrible. But one day he searched how to build a nav bar css js and found a guy whose name was Dev Ed on Youtube. Aly loved his course and his ability to english speaking. In result he searched about this guy and found his courses about js. So started learning again. Working on his code for days and nights with ultimate creativity that he had. How ever he had a lots of problem and left the coding for days but he came back to continue and completed his projects.",
  },
  {
    title: "Chapter Four: To be continued",
    desc: "After all Aly completed 8 creative projects with different technologies that he learnt and he is still learning. But the most important thing that will happen in this chapter is finding a job. Yes Aly will find a nice job at this chapter.  He thinks that he is ready to work with a nice team.",
  },
];



// if you master in any of your skill you just need to set "perc" of that skill to 300. it will add an explosion effect to that skill
// and make sure you put that skill in the even row: 2,4,6,...

export const hardSkillList: {
  name: string;
  icon: string;
  perc: number;
  color: string;
}[] = [
  {
    name: "Javascript",
    icon: "javascript.png",
    perc: 75,
    color: "(247,223,30)",
  },
  {
    name: "React",
    icon: "react.png",
    perc: 80,
    color: "(97,218,251)",
  },
  {
    name: "Typescript",
    icon: "typescript.png",
    perc: 70,
    color: "(49,120,198)",
  },
  {
    name: "NextJS",
    icon: "nextjs.png",
    perc: 75,
    color: "(118,212,207)",
  },
  {
    name: "HTML",
    icon: "html.png",
    perc: 90,
    color: "(228,79,38)",
  },
  {
    name: "CSS",
    icon: "css.png",
    perc: 90,
    color: "(21,114,182)",
  },
  {
    name: "TailWindCSS",
    icon: "tailwindcss.png",
    perc: 85,
    color: "(6,182,212)",
  },
  {
    name: "Redux",
    icon: "redux.png",
    perc: 80,
    color: "(118,74,188)",
  },
  {
    name: "ApolloClient",
    icon: "apolloclient.png",
    perc: 80,
    color: "(44,16,158)",
  },
  {
    name: "FramerMotion",
    icon: "framermotion.png",
    perc: 88,
    color: "(242,0,175)",
  },
  {
    name: "Git",
    icon: "git.png",
    perc: 65,
    color: "(240,81,51)",
  },
  {
    name: "Webpack",
    icon: "webpack.png",
    perc: 60,
    color: "(142,214,251)",
  },
  {
    name: "Jest",
    icon: "jest.png",
    perc: 60,
    color: "(148,64,88)",
  },
  {
    name: "RTL(testing)",
    icon: "rtl.png",
    perc: 60,
    color: "(252,69,68)",
  },
  {
    name: "Joomla",
    icon: "joomla.png",
    perc: 90,
    color: "(90,164,38)",
  },
];
export const SoftSkillList: {
  name: string;
  icon: string;
  perc: number;
  color: string;
}[] = [
  {
    name: "Adaptability",
    icon: "adaptability.png",
    perc: 88,
    color: "(1,1,1)",
  },
  {
    name: "Creativity",
    icon: "creativity.png",
    perc: 300,
    color: "(242,183,7)",
  },
  {
    name: "comunication",
    icon: "comunication.png",
    perc: 70,
    color: "(37,185,84)",
  },
  {
    name: "Responsibility",
    icon: "responsibility.png",
    perc: 88,
    color: "(253,236,166)",
  },
  {
    name: "Self Motivation",
    icon: "selfmotivation.png",
    perc: 88,
    color: "(143,255,171)",
  },
  {
    name: "Team work",
    icon: "teamwork.png",
    perc: 88,
    color: "(62,135,200)",
  },
];




export const langList: {
  name: string;
  icon: string;
  perc: number;
  color: string;
}[] = [
  {
    name: "Persian",
    icon: "farsi.png",
    perc: 90,
    color: "(192,192,192)",
  },
  {
    name: "English",
    icon: "english.png",
    perc: 60,
    color: "(192,192,192)",
  },
  {
    name: "Arabic",
    icon: "arabic.png",
    perc: 35,
    color: "(192,192,192)",
  },
];

export const eduSkillList: string[] = [
  "Airplane structural design",
  "Airplane numerical design",
  "Aerodynamics calculation of subsonic and hypersonic on 2d rigid bodies",
  "Space missions calculation",
  "Turbine design for turbojet and turbofan engines",
  "Designing high pressure water rocket",
  "Designing multi-angle launchers for rockets",
  "Designing solid-propellant rockets",
  "Modeling and study on rigid bodies in SolidWorks",
  "Modeling and Study on rigid bodies in ABAQUS",
  "Modeling and study on flow in COMSOL",
];

// image must be png format in media/logos/
export const eduData: {
  name: string;
  field: string;
  about: string;
  image: string;
}[] = [
  {
    name: "Khaje Nasir Toosi University Of Technology",
    field: "(2016-2020) Bachelor Degree - Aerospace Engineering",
    about:
      "K. N. Toosi University of Technology, made up of eleven academic faculties, opens doors to top talents of engineering and science. It brings together all levels of education and offers innovative training to its 7000|+ students.",
    image: "kntu",
  },
  {
    name: "University of Tehran",
    field: "(2021-present) Master of Engineering - Space Engineering",
    about:
      "The University of Tehran is the oldest modern university located in Tehran, Iran. It is also one of the most prestigious universities in the Middle East. Based on its historical, socio-cultural, political pedigree as well as its research and teaching profile, UT has been nicknamed “The Mother University of Iran”.",
    image: "ut",
  },
];

export const contactList: {
  site: string;
  username: string;
  logo: string;
  link: string;
}[] = [
  {
    site: "LinkedIn",
    username: "aly-mohamadi",
    logo: "linkedin",
    link: "https://www.linkedin.com/in/aly-mohamadi/",
  },
  {
    site: "GitHub",
    username: "dev-aly3n",
    logo: "github",
    link: "https://github.com/dev-aly3n",
  },
  {
    site: "Gmail",
    username: "dev.aly3n",
    logo: "gmail",
    link: "mailto:dev.aly3n@gmail.com",
  },
  {
    site: "Telegram",
    username: "aly3n",
    logo: "telegram",
    link: "https://t.me/aly3n",
  },
  {
    site: "WhatsApp",
    username: "",
    logo: "whatsapp",
    link: "https://wa.me/989152539070?text=Hello%20Aly!%20I've%20reached%20you%20through%20your%20personal%20website.",
  },
  {
    site: "Instagram",
    username: "aly3n",
    logo: "instagram",
    link: "https://www.instagram.com/aly.3n/",
  },
];

export const projectList: projectType[] = [
  {
    name: "Atefeh Hasani",
    desc: "This is a birthday gift to my girl. I made it in 15 days how ever the data-entry and fixing bugs took another 15 days. The project has been built as a template, so you can easily change the achievement data file and add your achievement however you still need to change other file to add your text and picture.",
    url: "atefeh.aly3n.dev",
    gitHub: "github.com/dev-aly3n/aerospace-engineer-portfolio",
    image: "atefeh-hasani.png",
    techs: [
      { name: "React", color: "#61D9FA" },
      { name: "NextJS", color: "#081722" },
      { name: "Tailwindcss", color: "#06B6D4" },
      { name: "FramerMotion", color: "#EC00C1" },
      { name: "PostCSS", color: "#DD3A0A" },
      { name: "intersection-observer", color: "#7BB651" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "CSS", color: "#1572B6" },
      { name: "HTML", color: "#E44F26" },
    ],
  },
  {
    name: "wiki anime",
    desc: "This single page application has been built by the power of React, graphQL, Tailwind css and ect. I didn't use any pre-built components or ui library and all of these stuff has been built from the scratch. It has been taken 60 days to build, however I learnt a lot at this time beside working on my application. Anyway thank you to visit my app and a big thanks to anilist graphQL server.",
    url: "wikianime.aly3n.dev",
    gitHub: "github.com/dev-aly3n/wikianime",
    image: "wikianime.png",
    techs: [
      { name: "React", color: "#61D9FA" },
      { name: "GarphQL", color: "#290BA0" },
      { name: "Tailwindcss", color: "#06B6D4" },
      { name: "FramerMotion", color: "#EC00C1" },
      { name: "intersection-observer", color: "#7BB651" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "CSS", color: "#1572B6" },
      { name: "HTML", color: "#E44F26" },
    ],
  },
  {
    name: "music-player",
    desc: "This is my first React app that I made by props drilling (to face the prop drilling hell). These musics don't have any copy right and I got them from chillhop that is a free right music application. There is nothing fancy about this project, I just like it.",
    url: "music.aly3n.dev",
    gitHub: "github.com/dev-aly3n/music-player",
    image: "music-player.png",
    techs: [
      { name: "React", color: "#61D9FA" },
      { name: "Tailwindcss", color: "#06B6D4" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "CSS", color: "#1572B6" },
      { name: "HTML", color: "#E44F26" },
    ],
  },
  {
    name: "Beat Maker",
    desc: "This is the last vanillaJS project that I made. No framework and js library used, just html css js and creativity. Click on “Load/Sample” button to load a sample and hit “play” to hear some beautiful opus. I hope you enjoy it.",
    url: "beatmaker.aly3n.dev",
    gitHub: "github.com/dev-aly3n/beatmaker",
    image: "beat-maker.png",
    techs: [
      { name: "Tailwindcss", color: "#06B6D4" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "CSS", color: "#1572B6" },
      { name: "HTML", color: "#E44F26" },
    ],
  },
  {
    name: "icecream shop",
    desc: "This is my second web project that I used css, html and js. I wasted a lot of time on functionality of Cart / calculation and ect. It was so fun and exciting to me. lt's a super light responsive website however the pictures are so huge.",
    url: "ice-cream.aly3n.dev",
    gitHub: "github.com/dev-aly3n/ice-cream-online-shop",
    image: "icecream-shop.png",
    techs: [
      { name: "Tailwindcss", color: "#06B6D4" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "CSS", color: "#1572B6" },
      { name: "HTML", color: "#E44F26" },
    ],
  },
  {
    name: "flash card online",
    desc: "This is my first project, my hello world in js. I like it so much. It is nice and easy to use flash card that save your card on your local machine. You can edit your card, delete them or change their color. Everyone wants to make a todo list for first project but I hate copy pasting and like to be creative.",
    url: "flash-card.aly3n.dev",
    gitHub: "github.com/dev-aly3n/flash-card-online",
    image: "flash-card-online.png",
    techs: [
      { name: "Tailwindcss", color: "#06B6D4" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "CSS", color: "#1572B6" },
      { name: "HTML", color: "#E44F26" },
    ],
  },
];

export const ActivityChartData: string[] = [
  "https://wakatime.com/share/@aly3n/28c1bd08-d655-4249-a17e-a985ff32f4d9.svg",
  "https://wakatime.com/share/@aly3n/d6968611-fd97-4c0d-8ba1-1fd7e69ba510.svg",
];

// GLOBAL
// GLOBAL
// GLOBAL
export const careerHeaderImage: { src: string; alt: string } = {
  src: "/media/aly3n.jpg",
  alt: "dev aly3n javascript developer",
};

export const topLogo: string = "Aly3n";

// for changing the color palete just go to root/tailwind.config.js and edit the primary and secondary colors...
// ...you also need to change the gray color cause I used it for background colors

// META DATA
export const gateMeta: {
  title: string;
  description: string;
  keywords: string;
  author: string;
  preload: string[];
} = {
  title: "dev Aly3n - JS developer",
  description:
    "dev Aly3n is a javascript developer especially at front-end who is also an aerospace engineer and editor-in-chief at aspad scientific magazine.",
  keywords:
    "dev aly3n, aly3n, aly3n developer, aly3n javascript, aly3n front-end, javascript, front-end, web development, software engineer, ali mohamadi, علی محمدی, علی محمدی برنامه نویس فرانت اند",
  author: "dev aly3n",
  preload: [
    "/media/gate/gate.jpg",
    "/media/gate/gate1.jpg",
    "/media/gate/gate2.jpg",
    "/media/gate/key.jpg",
    "/media/gate/keytext.jpg",
    "/media/gate/backroad.jpg",
    "/media/gate/door1.png",
    "/media/aly3n.jpg",
  ],
};
export const careerMeta: {
  title: string;
  description: string;
  keywords: string;
  author: string;
  preload: string[];
} = {
  title: "dev Aly3n - JS developer",
  description:
    "dev Aly3n is a javascript developer especially at front-end who is also an aerospace engineer and editor-in-chief at aspad scientific magazine.",
  keywords:
    "dev aly3n, aly3n, aly3n developer, aly3n javascript, aly3n front-end, javascript, front-end, web development, software engineer, ali mohamadi, علی محمدی, علی محمدی برنامه نویس فرانت اند",
  author: "dev aly3n",
  preload: ["/media/aly3n.jpg"],
};
export const projectMeta: {
  title: string;
  description: string;
  keywords: string;
  author: string;
  preload: string[];
} = {
  title: "dev Aly3n - project",
  description:
    "dev Aly3n is a javascript developer especially at front-end who is also an aerospace engineer and editor-in-chief at aspad scientific magazine.",
  keywords:
    "dev aly3n, aly3n, aly3n developer, aly3n javascript, aly3n front-end, javascript, front-end, web development, software engineer, ali mohamadi, react project, reactjs project, reactjs, nextjs project, علی محمدی, علی محمدی برنامه نویس فرانت اند",
  author: "dev aly3n",
  preload: [
    "/media/projects/atefeh-hasani.png",
    "/media/projects/beat-maker.png",
    "/media/projects/flash-card-online.png",
    "/media/projects/icecream-shop.png",
    "/media/projects/music-player.png",
    "/media/projects/wikianime.png",
  ],
};
