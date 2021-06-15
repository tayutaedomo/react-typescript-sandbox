import React, { VFC } from 'react';

import { Album } from '../../types/api/album';

type Props = {
  loading: boolean;
  albums: Array<Album>;
};

const BurdenResults: VFC<Props> = (props) => {
  const { loading, albums } = props;

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
                          alt={photo.title}
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

export default BurdenResults;
