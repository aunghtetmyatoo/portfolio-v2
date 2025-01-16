import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import FloatingImage from './floating-image';

export default function Project({
  slug,
  title,
  client,
  skills,
  description,
  image,
  index,
}: {
  slug: string;
  title: string;
  client: { name: string; logo: string };
  skills: string[];
  description: string;
  image: string;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const truncatedDescription = truncateText(description, 15);

  return (
    <article className="mt-16 w-full transition first-of-type:mt-0 md:hover:scale-[1.01] lg:w-4/5">
      <Link href={`/projects/${slug}`} className="group">
        <div className="mb-6 rounded-xl border border-white/65 bg-gradient-to-br from-primary-200/25 to-slate-600/25 px-8 py-6 mix-blend-normal drop-shadow-lg backdrop-blur-[30px]">
          <div
            className={clsx('flex flex-col items-center gap-4', {
              'md:flex-row': !isEven,
              'md:flex-row-reverse': isEven,
            })}
          >
            <div className="flex h-full flex-col text-secondary-700 dark:text-primary-100 md:w-1/2">
              <h1 className="mb-2 text-xl font-bold md:text-3xl">{title}</h1>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <h2 className="font-bold">{client.name}</h2>
              </div>
              <div className="mb-2 text-sm">
                <strong>Tech used: </strong>
                {skills.join(', ')}
              </div>
              <div className="text-sm">{truncatedDescription}</div>
              <div className="text-sm font-semibold leading-6 text-secondary-800 transition-all hover:text-secondary-900 dark:text-secondary-100 dark:hover:text-secondary-300">
                Read more <span aria-hidden="true">→</span>
              </div>
            </div>
            <div
              className={clsx('-mx-10 -mb-12 md:mx-0 md:-mb-12 md:-mt-8', {
                'md:-mr-20': !isEven,
                'md:-ml-20': isEven,
              })}
            >
              <FloatingImage image={image} altText={title} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};
