import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const SlopList = ({
  slops,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!slops.length) {
    return <h3>No Slop Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {slops &&
        slops.map((slop) => (
          <Card key={slop._id} className="mb-4">
            <CardHeader className="bg-light-green text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-dark"
                  to={`/profiles/${slop.slopAuthor}`}
                >
                  {slop.slopAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    {slop.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    {slop.createdAt}
                  </span>
                </>
              )}
              
            </CardHeader>
            
            <CardBody className="bg-light p-2">
              <p>{slop.slopText}</p>
            </CardBody>
            <CardFooter className="bg-light p-2">
              <Link
                className="btn btn-dark btn-block btn-rounded"
                to={`/slops/${slop._id}`}
              >
                Comments
              </Link>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default SlopList;
