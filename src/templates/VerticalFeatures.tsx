import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Empower your business with AI"
    description="We’ll take care of the nitty-gritty, you focus on what’s important."
  >
    <VerticalFeatureRow
      title="Our Mission"
      description="Our mission is to provide business with the tools to success. Our suite of AI tools empowers users to seize fresh opportunities, tackle complex day-to-day operational challenges, and grow their businesses."
      image="/assets/images/feature.svg"
      imageAlt="Image of Goldwayne Leh"
    />
  </Section>
);

export { VerticalFeatures };
