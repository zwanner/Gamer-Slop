import { CardHeader, CardBody, Card } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";


const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">


        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <Card className="p-1 bg-light text-dark">
                <CardHeader>
                  <Heading size='md'>{comment.commentAuthor} commented{' '}</Heading>
                  
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </CardHeader>
                <CardBody>{comment.commentText}</CardBody>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
