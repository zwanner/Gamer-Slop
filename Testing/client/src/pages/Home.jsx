import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';
import { Spinner } from '@chakra-ui/react'

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col col-lg-12 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="col mb-3">
          {loading ? (
            <Spinner />
          ) : (
            <ThoughtList
              thoughts={thoughts}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
