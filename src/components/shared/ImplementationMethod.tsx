import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import StepsList from '@/components/shared/StepsList';
import Reveal from '@/components/shared/Reveal';
import { implementationStepsIntro, implementationSteps } from '@/content/getStarted';

export default function ImplementationMethod() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow={implementationStepsIntro.eyebrow}
          title={implementationStepsIntro.title}
          intro={implementationStepsIntro.intro}
          maxWidth={720}
        />
      </Reveal>
      <StepsList steps={implementationSteps} />
    </Section>
  );
}
