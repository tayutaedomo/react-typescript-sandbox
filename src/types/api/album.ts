export type Album = {
  id: number;
  userId: number;
  title: string;
  photos: AlbumPhoto[];
};

export type AlbumPhoto = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
