import { Background } from '../background/Background';
import { ContactLayout } from '../layout/ContactLayout';
import { Section } from '../layout/Section';
import { NavBar } from './NavBar';

const ContactForm = () => (
  <Background color="bg-gray-100">
    <NavBar />

    <Section yPadding="py-6">
      <ContactLayout>
        <></>
      </ContactLayout>
    </Section>

  </Background>
);

export { ContactForm };
