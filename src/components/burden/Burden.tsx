import React, { useEffect } from 'react';

import { useAlbums } from './hooks/useAlbums';

const Burden = () => {
  const { getAlbums, loading, albums } = useAlbums();

  useEffect(() => getAlbums(), []);

  return (
    <>
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Photos</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return (
                <tr key={`album${album.id}`}>
                  <td>{album.id}</td>
                  <td>{album.title}</td>
                  <td>
                    {album.photos.map((photo) => {
                      return (
                        <img
                          key={photo.id}
                          width={32}
                          src={photo.thumbnailUrl}
                        />
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {loading && <div>Now loading...</div>}
    </>
  );
};

export default Burden;
