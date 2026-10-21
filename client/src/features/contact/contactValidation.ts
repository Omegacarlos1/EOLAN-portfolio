export interface ContactFormValues {
  email: string;
  message: string;
  name: string;
  projectType: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Enter your email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Tell me a little about your project.';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Add at least 20 characters so I can understand the request.';
  }

  return errors;
}
