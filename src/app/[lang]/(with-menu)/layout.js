import Header from '@/components/Header';

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
