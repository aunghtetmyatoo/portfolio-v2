import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGitlab } from 'react-icons/fa';

import Layout from '@/src/components/layout';
import FloatingImage from '@/src/components/project/floating-image';
import { projects } from '@/src/constants/index';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const { slug } = params;

  const project = projects.find(project => project.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div>Project not found</div>
      </Layout>
    );
  }

  const {
    title,
    client,
    skills,
    description,
    url,
    image,
    githubUrl,
    gitlabUrl,
  } = project;

  return (
    <Layout>
      <div className="mx-auto w-full px-4 py-10 text-secondary-600 dark:text-primary-100 md:max-w-4xl lg:max-w-7xl lg:py-20">
        <h1 className="headline mt-8 pb-4 text-3xl md:text-3xl lg:text-4xl">
          {title}
        </h1>
        <div className="flex flex-col-reverse justify-between md:h-72 md:flex-row">
          <div className="flex h-full flex-col justify-center">
            <strong className="mb-2 text-sm">Client:</strong>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src={client.logo}
                alt={client.name}
                width={32}
                height={32}
                className="rounded-md"
              />
              <h2 className="text-xl font-bold">{client.name}</h2>
            </div>
            <p className="w-80 text-sm">
              <strong>Tech used: </strong>
              {skills.join(', ')}
            </p>
            {url && (
              <div className="mt-8 flex items-center justify-start space-x-4">
                <Link
                  href={url}
                  target="_blank"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
                >
                  Visit project
                </Link>
                {githubUrl && (
                  <Link href={githubUrl} target="_blank">
                    <FaGithub size={30} />
                  </Link>
                )}
                {gitlabUrl && (
                  <Link href={gitlabUrl} target="_blank">
                    <FaGitlab size={30} />
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="-mb-8 md:mb-0">
            <FloatingImage image={image} altText={title} />
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-lg sm:mt-0">{description}</p>
      </div>
    </Layout>
  );
}
