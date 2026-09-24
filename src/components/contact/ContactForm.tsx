'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import { site } from '@/content/site';
import { contactFormCopy } from '@/content/contact';

type FormValues = {
  name: string;
  email: string;
  organization: string;
  disseminate: string;
  website: string;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  organization: '',
  disseminate: '',
  website: '',
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Demo request - ${values.organization || values.name || 'DACORIS EvidenceReach'}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Work email: ${values.email}`,
      `Organization: ${values.organization}`,
      `What they would like to disseminate: ${values.disseminate}`,
      values.website ? `Website: ${values.website}` : null,
    ].filter((line): line is string => Boolean(line));

    const mailto = `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <Box id="demo-form" component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Typography variant="h3">{contactFormCopy.title}</Typography>

      <TextField
        label={contactFormCopy.fields.name}
        value={values.name}
        onChange={handleChange('name')}
        required
        fullWidth
      />
      <TextField
        label={contactFormCopy.fields.email}
        type="email"
        value={values.email}
        onChange={handleChange('email')}
        required
        fullWidth
      />
      <TextField
        label={contactFormCopy.fields.organization}
        value={values.organization}
        onChange={handleChange('organization')}
        required
        fullWidth
      />
      <TextField
        label={contactFormCopy.fields.disseminate}
        value={values.disseminate}
        onChange={handleChange('disseminate')}
        required
        fullWidth
        multiline
        minRows={3}
      />
      <TextField
        label={contactFormCopy.fields.website}
        value={values.website}
        onChange={handleChange('website')}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" size="large" sx={{ alignSelf: 'flex-start' }}>
        {contactFormCopy.submitLabel}
      </Button>

      {submitted ? (
        <Typography variant="body2" sx={{ color: brand.greenInk }}>
          Opening your email client to send this to us - if nothing opens, email {site.email} directly.
        </Typography>
      ) : null}
    </Box>
  );
}
