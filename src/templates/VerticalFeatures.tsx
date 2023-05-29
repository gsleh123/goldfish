import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Goldfish"
    description="Our mission is to empower entrepreneurs to create vibrant communities through the power of AI."
  >
    <VerticalFeatureRow
      title="Goldwayne Leh"
      description="With experience at Amazon, Microsoft, and TikTok, Goldwayne has built large scale production platforms used by millions of people. During the pandemic, as shops closed, the idea for Goldfish was born."
      image="/assets/images/feature.svg"
      imageAlt="Image of Goldwayne Leh"
    />
    <VerticalFeatureRow
      title="Henry Sham"
      description="He old."
      image="/assets/images/feature2.svg"
      imageAlt="Image of Henry Sham"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
