import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { Stack } from '@chakra-ui/react';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-light  mb-1 flex-row align-center ">

      <div className="container flex-row justify-space-between-lg justify-center align-center">

        <div className="col">
          <Link className="text-black" to="/">
            <Stack direction="row" spacing={4}>
              <svg fill="#000000" width="75px" height="75px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,10.5c-3.925,0-7,2.086-7,4.75S8.075,20,12,20s7-2.086,7-4.75S15.925,10.5,12,10.5ZM12,18c-2.946,0-5-1.449-5-2.75s2.054-2.75,5-2.75,5,1.449,5,2.75S14.946,18,12,18Zm8-7.545V9a8.007,8.007,0,0,0-.113-1.286L22.868,2.5a1,1,0,0,0-1.142-1.457l-5.09,1.454a7.944,7.944,0,0,0-9.272,0L2.274,1.039A1,1,0,0,0,1.132,2.5L4.113,7.714A8.007,8.007,0,0,0,4,9v1.455A8.639,8.639,0,0,0,1,16.5C1,20.145,5.832,23,12,23s11-2.855,11-6.5A8.639,8.639,0,0,0,20,10.455Zm-.087-6.819-.884,1.547a7.9,7.9,0,0,0-.639-.975c-.027-.037-.046-.079-.075-.115Zm-15.826,0,1.6.457c-.029.036-.048.078-.075.115a7.9,7.9,0,0,0-.639.975ZM12,21c-5.384,0-9-2.327-9-4.5,0-1.292,1.062-3.858,2.475-4.62A1,1,0,0,0,6,11V9A6,6,0,0,1,18,9v2a1,1,0,0,0,.525.88C19.937,12.642,21,15.208,21,16.5,21,18.673,17.384,21,12,21Zm3-6a1,1,0,1,1-1-1A1,1,0,0,1,15,15Zm-4,0a1,1,0,1,1-1-1A1,1,0,0,1,11,15Z" /></svg>
              <h1 className="m-2">Gamer Slop</h1>
            </Stack>

          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-md btn-dark m-2" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                {Auth.getProfile().authenticatedPerson.username}'s profile
              </Link>
              <button className="btn btn-md btn-light m-2 p-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-md btn-dark m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;