import lpup from '../../media/project-banners/lpup.webp';
import personal_website from '../../media/project-banners/personal-website.webp';
import powerup_hackathon from '../../media/project-banners/poweruptech.webp';
import artist_corner from '../../media/project-banners/artist-corner.webp';
import gamejams from '../../media/project-banners/gamejams.webp';
import mabel from '../../media/project-banners/mabel.webp';
import bmwcf from '../../media/project-banners/bmw-cf.webp';

interface ProjectProps {
  image: string;
  imagePos: string;
  iconColInvert?: boolean;
  title: string;
  description: string;
  technology: string[];
  link: string;
  wip?: boolean;
}

const projects: ProjectProps[] = [
  {
    image: bmwcf,
    imagePos: '50% 30%',
    title: 'BMW ChargeForward',
    description:
      "As a BMW intern, I spent my time there contributing to BMW ChargeForward, a project that aims to reduce the carbon footprint of BMW's electric vehicles by using machine learning to predict the best time to charge vehicles",
    technology: ['React', 'Angular', 'TypeScript', 'Nest.js', 'PostgreSQL', 'ChakraUI', 'Figma'],
    link: 'https://bmwchargeforward.com/',
  },
  {
    image: mabel,
    imagePos: '50% 50%',
    title: 'Multi-Armed Bandit EvaLuator (MABEL)',
    description:
      "An NSF research project through the Rochester Institute of Technology to develop a tool to evaluate multi-armed bandit algorithms' ability to detect faulty sensor readings in autonomous connected vehicles",
    technology: ['Python', 'Plotly Dash', 'AI/ML'],
    link: 'https://icmab.github.io/MABEL/',
  },
  {
    image: lpup,
    imagePos: '50% 60%',
    title: 'Low Poly Underwater Pack',
    description:
      'A vast collection of underwater-themed art, tools, and shaders in a beautiful low-poly art style that allows game developers easily create vast and stunning underwater worlds',
    technology: ['Unity3D', 'C#', 'HLSL', 'Blender', 'Inkscape'],
    link: 'https://assetstore.unity.com/packages/3d/environments/landscapes/low-poly-underwater-pack-197874',
  },
  {
    image: powerup_hackathon,
    imagePos: '50% 50%',
    iconColInvert: true,
    title: 'Powerup Tech Buffalo Community Hackathon',
    description:
      'A service that allows the Say Yes Buffalo organization to quantitatively track alumni engagement in social media job postings fully autonomously',
    technology: ['React', 'TailwindCSS', 'NodeJS', 'PostgreSQL', 'Prisma', 'Render'],
    link: 'https://devpost.com/software/say-yes-buffalo-team-22?ref_content=contribution-prompt&ref_feature=engagement&ref_medium=email&utm_campaign=contribution-prompt&utm_content=contribution_reminder&utm_medium=email&utm_source=transactional#app-team',
  },
  {
    image: personal_website,
    imagePos: '50% 15%',
    title: 'Personal Website',
    description: "My personal website, the one you're on right now, built with React and Bulma.",
    technology: ['React', 'Bulma', 'EmailJS', 'HTML', 'SCSS', 'JS'],
    link: 'https://github.com/ahetrick12/personal-website',
  },
  {
    image: artist_corner,
    imagePos: '50% 12%',
    title: 'Artist Corner E-store',
    description:
      'An online artist e-store webpage with a JSON-server backend made using Angular as a team project for SWEN-261',
    technology: ['Angular', 'Java', 'Spring Boot', 'Typescript', 'HTML', 'CSS', 'JS'],
    link: 'https://github.com/ahetrick12/artist-corner-estore',
  },
  {
    image: gamejams,
    imagePos: '50% 45%',
    title: 'Game Jam Games',
    description: "A collection of games I've made for game jams throughout my life, all hosted on itch.io",
    technology: ['Unity3D', 'C#', 'Blender', 'Inkscape'],
    link: 'https://ventuargames.itch.io/',
  },
];

export default projects;
