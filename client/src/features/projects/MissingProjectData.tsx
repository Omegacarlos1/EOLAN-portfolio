export interface MissingProjectDataProps {
  label: string;
}

export function MissingProjectData({ label }: MissingProjectDataProps) {
  return (
    <p className="missing-data">
      <strong>TBD</strong>
      <span>Verified information is not yet available: {label}.</span>
    </p>
  );
}
