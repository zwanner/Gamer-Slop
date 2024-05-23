import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard | Gamer Slop</title>
      </Helmet>

      <AppView />
    </>
  );
}
