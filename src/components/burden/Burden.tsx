import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Album, AlbumPhoto } from '../../types/api/album';

const Burden = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const fetchAlbums = async () => {
      const url = 'https://jsonplaceholder.typicode.com/albums';
      const albums = (await axios.get<Album[]>(url)).data.slice(0, 2);

      for (const album of albums) {
        const url = `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`;
        const photos = (await axios.get<AlbumPhoto[]>(url)).data.slice(0, 3);
        console.log(photos);
        album.photos = photos;
      }

      setAlbums(albums);
      setLoading(false);
    };

    fetchAlbums();
  }, []);

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
                      return <img width={32} src={photo.thumbnailUrl} />;
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
