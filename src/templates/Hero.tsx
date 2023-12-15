import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { NavBar } from './NavBar';

const Hero = () => (
  <Background color="bg-gray-100">
    <NavBar />

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {`Business management made simple, and customizable, with intuitive tooling and AI\nTest`}
          </>
        }
        description={`Reduce costs, save time, and increase your revenue. Our AI-powered platform can help you save time with invoice management, inventory, marketing, and analyzing business performance.`}
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
        {'Stop spending money on expensive business consultants'}
      </>
    }
    description={`Our AI, Mia, can understand your entire business and build you a custom business management platform in 15 minutes. No more paying IT consultants to spin up a tool in 18 months.`}>
    <VerticalFeatureRow
      title="Invoice Management"
      description={`Stop wasting time with invoice management and data entry\n\t-Automate all your orders \n\t-Upload invoices just with a snapshot. We’ll handle the rest.`}
      image="/assets/images/feature.svg"
      imageAlt="Image of Goldwayne Leh"
    />
    <VerticalFeatureRow
      title="Comprehensive Feature Set"
      description={`We offer:\n\t- Inventory Management\n\t- Order Fulfillment\n\t- Accounts receivable & payable\n So you can focus on growing your business`}
      image="/assets/images/feature2.svg"
      imageAlt="Image of Henry Sham"
      reverse
    />
    <VerticalFeatureRow
      title="Intuitive Analytics"
      description="Tired of hard-to-follow analytics? Lean on real-time actionable insights to help your business succeed."
      image="/assets/images/feature3.svg"
      imageAlt="Image of Henry Sham"
    />
  </Section>
);
  </Background>
);

export { Hero };
