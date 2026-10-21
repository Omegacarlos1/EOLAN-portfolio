export interface ProfilePortraitProps {
  src?: string;
}

export function ProfilePortrait({ src }: ProfilePortraitProps) {
  if (src) {
    return (
      <figure className="profile-portrait">
        <img
          alt="Egbedayo Olanrewaju, Full-Stack Web Developer"
          className="profile-portrait__image"
          src={src}
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
        Professional portrait
        <small>Original file awaiting repository import</small>
      </figcaption>
    </figure>
  );
}
