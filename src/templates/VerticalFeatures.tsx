import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Goldfish"
    description="Our mission is to democratize business ownership to enable vibrant communities through the use of AI."
  >
    <VerticalFeatureRow
      title="Goldwayne Leh"
      description="With experience at Amazon, Microsoft, and TikTok, Goldwayne has built large scale production platforms. His passion is to combine technology with urban planning."
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
