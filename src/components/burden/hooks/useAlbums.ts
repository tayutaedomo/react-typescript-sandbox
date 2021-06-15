import { useCallback, useState } from 'react';
import axios from 'axios';

import { Album, AlbumPhoto } from '../../../types/api/album';

export const useAlbums = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAlbums = useCallback(() => {
    setLoading(true);

    const fetch = async () => {
      const albums = (await fetchAlbums()).data.slice(0, 2);

      for (const album of albums) {
        const res = await fetchAlbumPhotos(album.id);
        album.photos = res.data.slice(0, 3);
      }

      setAlbums(albums);
      setLoading(false);
    };

    fetch();
  }, []);

  return { getAlbums, loading, albums };
};

export const useAlbums2 = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAlbums = useCallback(() => {
    setLoading(true);

    const fetch = async () => {
      const albums = (await fetchAlbums()).data.slice(2, 4);

      await Promise.all(
        albums.map(async (album) => {
          const res = await fetchAlbumPhotos(album.id);
          album.photos = res.data.slice(0, 3);
        })
      );

      setAlbums(albums);
      setLoading(false);
    };

    fetch();
  }, []);

  return { getAlbums, loading, albums };
};

export const useAlbums3 = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAlbums = useCallback(() => {
    setLoading(true);

    const fetch = async () => {
      const albums = (await fetchAlbums()).data.slice(4, 6);

      for (const album of albums) {
        album.photos = [];
      }

      setAlbums(albums);
      setLoading(false);

      await Promise.all(
        albums.map(async (album) => {
          const res = await fetchAlbumPhotos(album.id);
          album.photos = res.data.slice(0, 3);

          setAlbums([...albums]);
        })
      );
    };

    fetch();
  }, []);

  return { getAlbums, loading, albums };
};

const fetchAlbums = async () => {
  const url = 'https://jsonplaceholder.typicode.com/albums';
  return await axios.get<Array<Album>>(url);
};

const fetchAlbumPhotos = async (albumId: number) => {
  const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
  return await axios.get<Array<AlbumPhoto>>(url);
};
