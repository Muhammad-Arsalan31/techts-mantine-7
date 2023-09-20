import { EmailBanner } from '@/components/EmailBanner/EmailBanner';
import { GetInTouch } from '@/components/Home/GetInTouch';
import { Hero } from '@/components/Home/Hero/Hero';
import { Services } from '@/components/Home/Services/Services';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <GetInTouch />
      <EmailBanner />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
