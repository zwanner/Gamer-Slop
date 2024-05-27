import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SLOP } from '../../utils/mutations';
import { QUERY_SLOPS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const SlopForm = () => {
  const [slopText, setSlopText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addSlop, { error }] = useMutation
  (ADD_SLOP, {
    refetchQueries: [
      QUERY_SLOPS,
      'getSlops',
      QUERY_ME,
      'me'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addSlop({
        variables: {
          slopText,
          // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username 
          thoughtAuthor: Auth.getProfile().authenticatedPerson.username
        },
      });

      setSlopText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'slopText' && value.length <= 280) {
      setSlopText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Create New Slop</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 500 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/500
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="slopText"
                value={slopText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-dark btn-block py-3" type="submit">
                Add Slop
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SlopForm;
