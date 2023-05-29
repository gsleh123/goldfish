import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/gsleh123/goldfish">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The app for\n'}
            <span className="text-primary-500">Entrepreneurs</span>
          </>
        }
        description="Open, manage, and expand your business at your fingertips."
        button={
          <Link href="/">
            <a>
              <Button xl>Coming Soon</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
