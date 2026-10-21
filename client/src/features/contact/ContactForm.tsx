import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '../../components/ui/Button';
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from './contactValidation';

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  projectType: '',
  message: '',
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionUnavailable, setSubmissionUnavailable] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as keyof ContactFormValues;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmissionUnavailable(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmissionUnavailable(false);
      return;
    }

    setSubmissionUnavailable(true);
  };

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">Name <span aria-hidden="true">(required)</span></label>
        <input
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          id="contact-name"
          name="name"
          onChange={handleChange}
          required
          type="text"
          value={values.name}
        />
        {errors.name ? (
          <p className="form-field__error" id="contact-name-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email <span aria-hidden="true">(required)</span></label>
        <input
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          id="contact-email"
          inputMode="email"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={values.email}
        />
        {errors.email ? (
          <p className="form-field__error" id="contact-email-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-project-type">Project type (optional)</label>
        <select
          id="contact-project-type"
          name="projectType"
          onChange={handleChange}
          value={values.projectType}
        >
          <option value="">Select a service</option>
          <option value="full-stack">Full-stack development</option>
          <option value="frontend">Frontend development</option>
          <option value="backend">Backend / API development</option>
          <option value="database">Database design</option>
          <option value="ecommerce">E-commerce development</option>
          <option value="maintenance">Website maintenance</option>
        </select>
      </div>

      <div className="form-field form-field--full">
        <label htmlFor="contact-message">Project details <span aria-hidden="true">(required)</span></label>
        <textarea
          aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-hint'}
          aria-invalid={Boolean(errors.message)}
          id="contact-message"
          name="message"
          onChange={handleChange}
          required
          rows={6}
          value={values.message}
        />
        <p className="form-field__hint" id="contact-message-hint">
          Please include at least 20 characters. Do not share passwords or secrets.
        </p>
        {errors.message ? (
          <p className="form-field__error" id="contact-message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="contact-form__footer">
        <Button type="submit">Check enquiry</Button>
        <p className="contact-form__notice">
          Preview only — sending is unavailable until the backend is connected.
        </p>
      </div>

      {submissionUnavailable ? (
        <p className="form-status" role="status">
          Sending unavailable until backend is connected. Your message has not been sent.
        </p>
      ) : null}
    </form>
  );
}
