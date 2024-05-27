import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { useToast } from '@chakra-ui/react'

const SlopList = ({
  slops,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  const toast = useToast()
  if (!slops.length) {
    return <h3>No Slop Yet</h3>;
  }
  return (
    <div>
      
      {showTitle && <h3>{title}</h3>}
      {slops &&
        slops.map((slop) => (
          <Card key={slop._id} className="mb-4">
            <CardHeader className="bg-light-green text-dark p-2 m-0">
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
            <CardFooter className="bg-light p-2"></CardFooter>
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              {/* <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                Like ({slop.likes || 0})
              </Button> */}
              <Button
                flex="1"
                variant="ghost"
                leftIcon={<BiChat />}
                onClick={() => (window.location.href = `/slops/${slop._id}`)}
              >
                Comments
              </Button>
              <Button
                flex="1"
                variant="ghost"
                leftIcon={<BiShare />}
                onClick={() => {
                  const el = document.createElement('textarea');
                  el.value = window.location.origin + '/slops/' + slop._id;
                  document.body.appendChild(el);
                  el.select();
                  document.execCommand('copy');
                  document.body.removeChild(el);
                  toast({
                    title: 'Link Copied To Clipboard',
                    description: "Copied link to clipboard.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}
              >
                Share
              </Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default SlopList;
