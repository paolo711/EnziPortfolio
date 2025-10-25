
export const titles = [
  "Frontend Developer",
  "UI/UX Designer",
  "UX Researcher",
  "ReactJS Developer",
];

export const aboutMe = 
`
I specialize in UI/UX Designing, but I'm also good at front end developing which is my second interest, currently a college student taking Bachelor of Science in Information Technology.

`;

export const techStack = {
  "Languages I know": {
   
    Javascript: "/logos/js.png",
    HTML: "/logos/html.png",
    CSS: "/logos/css.png",
  },
  "Frameworks I use": {
    NextJS: "/logos/next.png",
    React: "/logos/react.png",
    Tailwindcss: "/logos/tailwind.png",
    NodeJS: "/logos/node.png",
   
  }
} as const;

export const links: Record<string, ILink> = {

  discord: {
    name: "Discord",
    link: "https://discord.com/channels/@me/813847887657123348",
  },
  github: {
    name: "Github",
    link: "https://github.com/EnziLuke18",
  },

  Facebook: {
    name: "Facebook",
    link:"https://www.facebook.com/enziluke.torrento"
  },
}

export const content: Record<ContentTypes, IContent[]> = {
  project: [
    {
      name: "Iskor",
      tags: ["ReactJS", "Tailwindcss", "NodeJS",],
      description: "A score tracking web app to calculate your exam scores and your overall performance thus showing your grades based on the criteria provided.",
      pics: ["/pics/Iskor.png"]
    },
    {
      name: "Anti-Ligoy",
      tags: ["Figma", "UI/UX Design"],
      description: "Student attendance tracking device to prevent class cutting and to notify the guardian on when did the student arrive at school grounds.",
      pics: [""]
    },
    {
      name: "MapaWit",
      tags: ["ReactJS", "Three.js", "Mongodb"],
      description: "A web app that is mainly for freshies to help them navigate buildings in rooms between campus to guide them and provide directions.",
      pics: ["/pics/Mapawit.png"]
    },
    {
      name: "TimeTune",
      tags: ["Figma","UI/UX Design"],
      description: "Crypto project where I've built both the landing page and the dashboard. Backend with a database and smart contracts for the on-chain algorithms.",
      pics: ["/pics/TimeTune.png"]
    },
  
  ]
}

export interface ILink {
  name: string;
  link: string;
}

export type ContentTypes = 
  "project";

export interface IContent {
  name: string;
  description?: string;
  tags?: string[];
  pics: string[];
}
