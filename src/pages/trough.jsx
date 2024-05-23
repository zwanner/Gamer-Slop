import { Helmet } from 'react-helmet-async';

import { TroughView } from 'src/sections/trough/view';

// ----------------------------------------------------------------------

export default function TroughPage() {
  return (
    <>
      <Helmet>
        <title>Trough | Gamer Slop</title>
      </Helmet>

      <TroughView />
    </>
  );
}
