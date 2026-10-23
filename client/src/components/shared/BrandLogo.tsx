interface BrandLogoProps {
  priority?: boolean;
  showWordmark?: boolean;
}

export function BrandLogo({
  priority = false,
  showWordmark = true,
}: BrandLogoProps) {
  return (
    <span className="brand-logo">
      <span className="brand-logo__mark">
        <img
          alt="EOLAN DiGITAL logo"
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
          height="1254"
          loading={priority ? 'eager' : 'lazy'}
          src="/images/eolan-logo.jpeg"
          width="1254"
        />
      </span>
      {showWordmark ? (
        <span className="brand-logo__wordmark" aria-hidden="true">
          <strong>EOLAN</strong>
          <span>DiGITAL</span>
        </span>
      ) : null}
    </span>
  );
}
