import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { AppConfig } from '../utils/AppConfig';
import { NavBar } from './NavBar';

const Hero = () => (
  <Background color="bg-gray-100">
    <NavBar />

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Streamline your repetitive tasks with AI \n'}
          </>
        }
        description={`${AppConfig.company_name} empowers businesses with AI to enable rapid growth and confident decision-making.`}
        button={
          <Link href="/contact-us">
              <a>
                <Button xl>Get Started</Button>
              </a>
          </Link>
        }
      />
    </Section>

    <Section
    title={
      <>
        {'Create a ' }
        <span className="text-primary-500">single</span>
        {' source of truth'}
      </>
    }
    description={`${AppConfig.company_name} centralizes all of your data, and gives you a clear and accurate picture of your business, to give you clarity and peace of mind`}
  >
    <VerticalFeatureRow
      title="Reclaim your time"
      description={`Delegate and automate repetitive tasks to AI. ${AppConfig.company_name} will take care of the rest.`}
      image="/assets/images/feature.svg"
      imageAlt="Image of Goldwayne Leh"
    />
    <VerticalFeatureRow
      title="Achieve clarity"
      description="With a single source of truth, you can confidently make decisions for your business."
      image="/assets/images/feature2.svg"
      imageAlt="Image of Henry Sham"
      reverse
    />
    <VerticalFeatureRow
      title="Harness growth"
      description="Focus on what’s important to your business, and achieve new levels of growth."
      image="/assets/images/feature3.svg"
      imageAlt="Image of Henry Sham"
    />
  </Section>
);
  </Background>
);

export { Hero };
