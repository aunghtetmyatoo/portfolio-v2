import Layout from '@/src/components/layout';
import Project from '@/src/components/project';
import { projects } from '@/src/constants/index';

export default function Projects() {
  return (
    <Layout>
      <div className="mx-auto flex w-full flex-col items-center justify-center px-4 py-20 md:max-w-4xl lg:max-w-7xl">
        {projects.map((project, index) => (
          <Project key={project.slug} {...project} index={index} />
        ))}
      </div>
    </Layout>
  );
}
