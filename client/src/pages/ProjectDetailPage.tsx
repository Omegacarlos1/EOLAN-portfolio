import { useParams } from 'react-router-dom';
import { PlaceholderPage } from '../components/shared/PlaceholderPage';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <PlaceholderPage
      title="Project Case Study"
      description={`Case study content for “${slug ?? 'TBD'}” is not available until project details are verified.`}
    />
  );
}
