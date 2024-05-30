import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { Movie, MoviesAction, MoviesData, MoviesState } from "../types";
import { moviesReducer } from "./moviesReducer";

const getFromLocalStorage = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};

const initialState: MoviesState = {
  results: [],
  currentPage: 1,
  totalPages: 0,
  wishlist: getFromLocalStorage(),
};

const MoviesContext = createContext<
  | {
      state: MoviesState;
      dispatch: React.Dispatch<MoviesAction>;
      nextPage: () => void;
      prevPage: () => void;
      handleLike: (movie: Movie) => void;
    }
  | undefined
>(undefined);

export const MoviesProvider = ({
  children,
  fetchData,
}: {
  children: ReactNode;
  fetchData: (page: number) => Promise<MoviesData>;
}) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const fetchPageData = useCallback(async () => {
    try {
      const response = await fetchData(state.currentPage);
      dispatch({ type: "SET_DATA", payload: response });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [fetchData, state.currentPage]);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const nextPage = useCallback(() => {
    if (state.currentPage < state.totalPages) {
      dispatch({ type: "SET_PAGE", payload: state.currentPage + 1 });
    }
  }, [state.currentPage, state.totalPages]);

  const prevPage = useCallback(() => {
    if (state.currentPage > 1) {
      dispatch({ type: "SET_PAGE", payload: state.currentPage - 1 });
    }
  }, [state.currentPage]);

  const handleLike = (movie: Movie) => {
    dispatch({ type: "HANDLE_LIKE", payload: movie });
  };

  return (
    <MoviesContext.Provider
      value={{ state, dispatch, nextPage, prevPage, handleLike }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) {
    throw new Error("The provider is missing");
  }
  return context;
};
