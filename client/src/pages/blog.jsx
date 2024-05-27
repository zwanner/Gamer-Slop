import { useQuery } from '@apollo/client';
import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';

import SlopList from '../components/SlopList';
import SlopForm from '../components/SlopForm';

import { QUERY_SLOPS } from '../utils/queries';

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
