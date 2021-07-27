export type SearchResponse = {
  search: Search;
};

type Search = {
  edges: Array<Edge>;
  pageInfo: PageInfo;
  repositoryCount: number;
};

export type Edge = {
  cursor: string;
  node: Node;
};

export type Node = {
  id: string;
  name: string;
  url: string;
  viewerHasStarred: boolean;
  stargazers: Stargazers;
};

export type Stargazers = {
  totalCount: number;
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
};

export type SearchVariables = {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
  query: string;
};
