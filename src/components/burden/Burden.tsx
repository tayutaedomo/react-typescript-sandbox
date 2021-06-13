import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Album } from '../../types/api/album';

const Burden = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const url = 'https://jsonplaceholder.typicode.com/albums';
      const albums = (await axios.get<Album[]>(url)).data;

      setAlbums(albums);
    };

    fetchAlbums();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => {
            return (
              <tr key={`album${album.id}`}>
                <td>{album.id}</td>
                <td>{album.userId}</td>
                <td>{album.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Burden;
