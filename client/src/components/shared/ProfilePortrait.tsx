import { useState } from 'react';

export interface ProfilePortraitProps {
  priority?: boolean;
  src?: string;
}

export function ProfilePortrait({
  priority = false,
  src,
}: ProfilePortraitProps) {
  const [imageResult, setImageResult] = useState<{
    src: string | undefined;
    state: 'loaded' | 'error';
  }>();
  const imageState =
    imageResult && imageResult.src === src ? imageResult.state : 'loading';

  if (src && imageState !== 'error') {
    return (
      <figure
        aria-busy={imageState === 'loading'}
        className="profile-portrait profile-portrait--image"
      >
        {imageState === 'loading' ? (
          <span className="profile-portrait__loading" role="status">
            <span className="sr-only">Loading professional portrait</span>
          </span>
        ) : null}
        <img
          alt="Egbedayo Olanrewaju, Full-Stack Web Developer"
          className="profile-portrait__image"
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          height="1038"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setImageResult({ src, state: 'error' })}
          onLoad={() => setImageResult({ src, state: 'loaded' })}
          src={src}
          width="831"
        />
      </figure>
    );
  }

  return (
    <figure
      aria-label="Professional portrait placeholder for Egbedayo Olanrewaju"
      className="profile-portrait profile-portrait--placeholder"
      role="img"
    >
      <span aria-hidden="true" className="profile-portrait__monogram">
        EO
      </span>
      <figcaption>
        {imageState === 'error' ? 'Portrait unavailable' : 'Professional portrait'}
        <small>
          {imageState === 'error'
            ? 'Check the configured image path'
            : 'Original file awaiting repository import'}
        </small>
      </figcaption>
    </figure>
  );
}
