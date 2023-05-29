import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

const About = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <VerticalFeatures />
    <Footer />
  </div>
);

export default About;
