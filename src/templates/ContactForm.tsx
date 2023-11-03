import Link from 'next/link';

import { Background } from '../background/Background';
import { ContactLayout } from '../layout/ContactLayout';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const ContactForm = () => (
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
      <ContactLayout>
      </ContactLayout>
    </Section>

  </Background>
);

export { ContactForm };
