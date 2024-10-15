import { notFound } from 'next/navigation';

import ProfileCard from '@/components/Blocks/ProfileCard';

const items = [
  {
    name: 'Adrian Giraldo',
    slug: 'adrian',
    email: 'adrian@agenciamadremia.com',
    position: 'Ventas',
    image: '/images/team/adrian.jpg',
    linkedIn: 'https://www.linkedin.com/in/adrian-giraldo-restrepo',
    phone: '+34 641 587 441',
  },
  {
    name: 'Harold Giraldo',
    slug: 'harold',
    email: 'harold@agenciamadremia.com',
    position: 'Ingeniero de Software',
    image: '/images/team/harold.jpg',
    linkedIn: 'https://www.linkedin.com/in/haroldgiraldorestrepo',
    phone: '+34 695 376 190',
  },
  {
    name: 'Mariana Restrepo',
    slug: 'mariana',
    email: 'social@agenciamadremia.com',
    position: 'Marketing',
    image: '/images/team/mariana.jpg',
    linkedIn: 'https://www.linkedin.com/in/marianarestrepotamayo',
    phone: '+34 614 262 145',
  },
  {
    name: 'Bryan Giraldo',
    slug: 'bryan',
    email: 'bryan@agenciamadremia.com',
    position: 'Diseño UX/UI',
    image: '/images/team/bryan.jpg',
    linkedIn: 'https://www.linkedin.com/in/bryan-giraldo-restrepo-9522521a4',
    phone: '+34 614 262 145',
  },
];

export async function generateMetadata({ params: { slug = null } }) {
  const data = items.find((item) => item.slug === slug);

  if (!data || !data.slug) {
    return {};
  }

  return {
    title: `${data.name} - ${data.position} | MadreMía`,
    openGraph: {
      images: [data.image],
    },
  };
}

export async function generateStaticParams() {
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params: { slug = null } }) {
  const data = items.find((item) => item.slug === slug);

  if (!data || !data?.slug) {
    return notFound();
  }

  return (
    <>
      <h1 className='text-3xl font-bold mb-10 hidden'>{data.name}</h1>
      <section className='mb-8'>
        <ProfileCard {...data} />
      </section>
    </>
  );
}
