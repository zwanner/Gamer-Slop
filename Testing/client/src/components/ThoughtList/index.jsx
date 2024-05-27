import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Slop Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <Card key={thought._id} className="mb-4">
            <CardHeader className="bg-light-green text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-dark"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    {thought.createdAt}
                  </span>
                </>
              )}
              
            </CardHeader>
            
            <CardBody className="bg-light p-2">
              <p>{thought.thoughtText}</p>
            </CardBody>
            <CardFooter className="bg-light p-2">
              <Link
                className="btn btn-dark btn-block btn-rounded"
                to={`/thoughts/${thought._id}`}
              >
                Comments
              </Link>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default ThoughtList;
