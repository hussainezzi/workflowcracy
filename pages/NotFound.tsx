import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => (
  <PageHeader
    eyebrow="404"
    title="That page has moved on"
    intro="The link is broken or the page no longer exists. These are the ones that do."
  >
    <Button to="/">Back to home</Button>
    <Button to="/projects" variant="ghost">
      See our work
    </Button>
  </PageHeader>
);

export default NotFound;
