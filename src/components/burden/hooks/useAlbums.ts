import { useCallback, useState } from 'react';
import axios from 'axios';

import { Album, AlbumPhoto } from '../../../types/api/album';

export const useAlbums = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAlbums = useCallback(() => {
    setLoading(true);

    const fetchAlbums = async () => {
      const url = 'https://jsonplaceholder.typicode.com/albums';
      const albums = (await axios.get<Array<Album>>(url)).data.slice(0, 2);

      await Promise.all(
        albums.map(async (album) => {
          const url = `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`;
          const photos = (await axios.get<Array<AlbumPhoto>>(url)).data.slice(
            0,
            3
          );
          album.photos = photos;
        })
      );

      setAlbums(albums);
      setLoading(false);
    };

    fetchAlbums();
  }, []);

  return { getAlbums, loading, albums };
};
