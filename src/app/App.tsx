import { Header } from '../../app/components/Header';
import { Hero } from '../../app/components/Hero';
import { About } from '../../app/components/About';
import { Services } from '../../app/components/Services';
import { Clients } from '../../app/components/Clients';
import { Footer } from '../../app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}