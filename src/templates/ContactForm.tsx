import { Section } from '../layout/Section';

const ContactForm = () => (
  <Section
    title="Contact Us"
    description="If you're interested in helping us with our dreams, please reach out."
  >
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

  </Section>
);

export { ContactForm };
