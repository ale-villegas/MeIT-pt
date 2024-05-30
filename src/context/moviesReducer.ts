/* eslint-disable no-case-declarations */
import { MoviesAction, MoviesState } from "../types";

export const moviesReducer = (
    state: MoviesState,
    action: MoviesAction
  ): MoviesState => {
    const { type, payload } = action;
    switch (type) {
      case "SET_DATA":
        return {
          ...state,
          results: payload.results,
          totalPages: payload.total_pages,
        };
      case "SET_PAGE":
        return {
          ...state,
          currentPage: payload,
        };
      case "HANDLE_LIKE":
        const alredyFav = state.wishlist.find((movie) => movie.id === payload.id);
        if (alredyFav)
          return {
            ...state,
            wishlist: state.wishlist.filter((movie) => movie.id !== payload.id),
          };
        return { ...state, wishlist: [...state.wishlist, payload] };
      default:
        return state;
    }
  };