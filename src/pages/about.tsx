import Link from 'next/link';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

const About = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Sign In</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

    <Section yPadding="py-6">
      <VerticalFeatures />
    </Section>

    </Background>
   
    <Footer />
  </div>
);

export default About;
