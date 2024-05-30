export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesData {
  results: Movie[];
  total_pages: number;
}

export interface MoviesState {
  results: Movie[];
  currentPage: number;
  totalPages: number;
  wishlist: Movie[];
}

export type MoviesAction =
  | { type: "SET_DATA"; payload: MoviesData }
  | { type: "SET_PAGE"; payload: number }
  | { type: "HANDLE_LIKE"; payload: Movie };
