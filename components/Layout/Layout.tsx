import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
