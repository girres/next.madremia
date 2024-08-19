import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <div className='breadcrumbs text-sm'>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>New Page</li>
          </ul>
        </div>
        <h1>This is the new page</h1>
      </div>
    </main>
  );
}
