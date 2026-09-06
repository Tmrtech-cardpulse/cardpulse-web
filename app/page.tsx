import AppScreens from '@/components/AppScreens';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Honesty from '@/components/Honesty';
import HowItWorks from '@/components/HowItWorks';
import PhotoBand from '@/components/PhotoBand';
import Pricing from '@/components/Pricing';
import PulseScore from '@/components/PulseScore';
import SoldNotAsking from '@/components/SoldNotAsking';
import Waitlist from '@/components/Waitlist';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SoldNotAsking />
        <PhotoBand />
        <HowItWorks />
        <AppScreens />
        <PulseScore />
        <Honesty />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
