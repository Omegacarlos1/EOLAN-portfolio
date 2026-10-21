import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
}

export function PageMeta({ title }: PageMetaProps) {
  useEffect(() => {
    document.title = `${title} | EOLAN DiGITAL`;
  }, [title]);

  return null;
}
