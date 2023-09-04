import Link from 'next/link';
import DescriptionMap from '@/components/DescriptionMap';
import Image from 'next/image';

function SectionHeaderText(props) {
  const {children} = props;
  return (
    <h4 className="pb-5 text-xl font-medium">{children}</h4>
  )
}

export default function Home() {
  const links = [
    { name: 'Email', link: 'mailto:ericerlenmeyer@gmail.com', content: 'ericerlenmeyer@gmail.com' },
    { name: 'Github', link: 'https://github.com/EricFrancis12', content: 'EricFrancis12' },
    { name: 'LinkedIn', link: 'https://linkedin.com', content: 'ericerlenmeyer' },
    { name: 'Youtube', link: 'https://youtube.com', content: 'N/A' }
  ];

  const skills = [
    { name: 'Javascript', content: ['React', 'React Native', 'Sveltekit', 'Node.js'] },
    { name: 'Python', content: ['Data Analysis', 'Django', 'Flask', 'Data Visualization'] },
    { name: 'Web', content: ['Sass', 'TailwindCSS', 'Firebase', 'NoSQL', 'SQL', 'Netlify', 'AWS', 'GCP', 'GIT', 'DOCKER', 'Kubernetes'] },
    { name: 'Design', content: ['Canvas', 'Pixlr', 'Figma'] }
  ];

  const workHistory = [
    { name: 'Zeltane Systems (2021 - Present)', content: 'Developer,...........' },
    { name: 'Zeltane Systems (2021 - Present)', content: 'Developer,...........' },
    { name: 'Zeltane Systems (2021 - Present)', content: 'Developer,...........' },
    { name: 'Zeltane Systems (2021 - Present)', content: 'Developer,...........' }
  ];

  const hobbies = [
    { name: 'Making coding videos', content: 'I really really really enjoy programming' },
    { name: 'Making coding videos', content: 'I really really really enjoy programming' },
    { name: 'Making coding videos', content: 'I really really really enjoy programming' },
    { name: 'Making coding videos', content: 'I really really really enjoy programming' },
  ];

  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-[900] w-full">
      <h2 className="font-bold text-4xl sm:text-5xl sm:py-4 md:text-6xl md:py-8">Digital Resume</h2>
      <section>
        <SectionHeaderText>Eric Francis - Web Developer and Educator</SectionHeaderText>
        <DescriptionMap list={links} type={'links'}></DescriptionMap>
      </section>
      <section>
        <SectionHeaderText>Skills</SectionHeaderText>
        <DescriptionMap list={skills} type={'skills'}></DescriptionMap>
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>
        <p className="text-xs sm:text-sm">Check out my latest <Link href="/projects" className="text-sky-400">projects</Link></p>
      </section>
      <section>
        <SectionHeaderText>Work History</SectionHeaderText>
        <DescriptionMap list={workHistory} type={'work'}></DescriptionMap>
      </section>
      <section>
        <SectionHeaderText>Just For Fun</SectionHeaderText>
        <DescriptionMap list={hobbies} type={'hobbies'}></DescriptionMap>
      </section>
    </main>
  )
}
