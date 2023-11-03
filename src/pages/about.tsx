import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';
import { NavBar } from '../templates/NavBar';

const About = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <Background color="bg-gray-100">
      <NavBar />

    <Section yPadding="py-6">
      <VerticalFeatures />
    </Section>

    </Background>
   
    <Footer />
  </div>
);

export default About;
