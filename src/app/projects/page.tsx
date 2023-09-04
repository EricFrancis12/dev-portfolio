import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

export default function ProjectsPage() {
    const projects = [
        { name: 'Project 1', link: 'https://github.com/project-1', description: 'qwwoern oiqwenroiqwneoir nqwoie nqwoie rnqowie rnqowenr oiqwen oiqwen oiqwenr oiqwne oiqwner oiqwneroi nqweoir[mqw [qwp,eof kqweiof kqwpf fqkw[eff', videoLink: 'video.mp4' },
        { name: 'Project 2', link: 'https://github.com/project-2', description: 'qwwoern oiqwenroiqwneoir nqwoie nqwoie rnqowie rnqowenr oiqwen oiqwen oiqwenr oiqwne oiqwner oiqwneroi nqweoir[mqw [qwp,eof kqweiof kqwpf fqkw[eff', videoLink: 'video.mp4' },
        { name: 'Project 3', link: 'https://github.com/project-3', description: 'qwwoern oiqwenroiqwneoir nqwoie nqwoie rnqowie rnqowenr oiqwen oiqwen oiqwenr oiqwne oiqwner oiqwneroi nqweoir[mqw [qwp,eof kqweiof kqwpf fqkw[eff', videoLink: 'video.mp4' }
    ];

    return (
        <main className="flex flex-col flex-1 bg-slate-100">
            {projects.map((project, projectIndex) => {
                return (
                    <ProjectCard key={projectIndex} project={project} index={projectIndex}></ProjectCard>
                )
            })}
        </main>
    )
}
