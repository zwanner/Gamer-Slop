import { useQuery } from '@apollo/client';
import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Home | Gamer Slop </title>
      </Helmet>

      <BlogView />
    </>
    
  );
}
