import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const NavBar = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/contact-us">
            <a>Sign Up</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { NavBar };
