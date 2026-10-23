import { useEffect } from 'react';

interface PageMetaProps {
  description: string;
  noIndex?: boolean;
  title: string;
}

type MetaAttribute = 'name' | 'property';

function setMetaContent(
  attribute: MetaAttribute,
  value: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${value}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.append(element);
  }

  element.content = content;
}

export function PageMeta({
  description,
  noIndex = false,
  title,
}: PageMetaProps) {
  useEffect(() => {
    const pageTitle = `${title} | EOLAN DiGITAL`;

    document.title = pageTitle;
    setMetaContent('name', 'description', description);
    setMetaContent(
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow',
    );
    setMetaContent('property', 'og:title', pageTitle);
    setMetaContent('property', 'og:description', description);
  }, [description, noIndex, title]);

  return null;
}
