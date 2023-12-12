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
            {`Our mission is to help business thrive. With ${AppConfig.company_name} , anybody can run a successful business.\n`}
          </>
        }
        description={`We are redrawing the boundaries of AI and human collaboration. Harness and unlock your business's full potential.`}
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
        {'Truly a custom-built ERP, for you and your SME.'}
      </>
    }
    description={`${AppConfig.company_name} leverages AI to tailor an ERP fit for your business today and in the future.`}>
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
      title="Results now"
      description="Spin up a custom fit ERP for you, in 15 minutes."
      image="/assets/images/feature3.svg"
      imageAlt="Image of Henry Sham"
    />
  </Section>
);
  </Background>
);

export { Hero };
