import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlockDiagnosis } from '@/components/Blocks';

export default async function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <BlockDiagnosis />
      <Footer />
    </>
  );
}
