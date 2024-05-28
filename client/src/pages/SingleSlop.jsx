// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import { Spinner } from '@chakra-ui/react'
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_SLOP } from '../utils/queries';

const SingleSlop = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { slopId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_SLOP, {
    // pass URL parameter
    variables: { slopId: slopId },
  });

  const slop = data?.slop || {};

  if (loading) {
    return <Spinner size="lg"/>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-light-green text-dark p-2 m-0">
        {slop.slopAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          {slop.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {slop.slopText}
        </blockquote>
      </div>
      <div className="my-5">
        <CommentList comments={slop.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm slopId={slop._id} />
      </div>
    </div>
  );
};

export default SingleSlop;
