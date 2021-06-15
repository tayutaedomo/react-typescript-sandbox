import React, { useEffect, VFC } from 'react';

import BurdenResults from './BurdenResults';
import { useAlbums, useAlbums2, useAlbums3 } from './hooks/useAlbums';

const Burden: VFC = () => {
  const { getAlbums, loading, albums } = useAlbums();
  const retUseAlbums2 = useAlbums2();
  const retUseAlbums3 = useAlbums3();

  useEffect(() => {
    getAlbums();
    retUseAlbums2.getAlbums();
    retUseAlbums3.getAlbums();
  }, [getAlbums]);

  return (
    <>
      <BurdenResults loading={loading} albums={albums} />
      <BurdenResults
        loading={retUseAlbums2.loading}
        albums={retUseAlbums2.albums}
      />
      <BurdenResults
        loading={retUseAlbums3.loading}
        albums={retUseAlbums3.albums}
      />
    </>
  );
};

export default Burden;
