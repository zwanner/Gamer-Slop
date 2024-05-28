import { useQuery } from '@apollo/client';

import SlopList from '../components/SlopList';
import SlopForm from '../components/SlopForm';

import { QUERY_SLOPS } from '../utils/queries';
import { Spinner } from '@chakra-ui/react'

const Home = () => {
  const { loading, data } = useQuery(QUERY_SLOPS);
  const slops = data?.slops || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col col-lg-12 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <SlopForm />
        </div>
        <div className="col col-md mb-3">
          {loading ? (
            <Spinner size='lg'/>
          ) : (
            <SlopList
              slops={slops}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
