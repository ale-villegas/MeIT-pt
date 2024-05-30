import { Movie } from "../types";

const API_URL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmNhN2QyZTMxNGI1ZDhiNjViYjM1MzRkN2M2MTg0NSIsInN1YiI6IjYwMjRmZDYxZDZjMzAwNjE0MDY0NGIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FeBINvmkRrTGFrwfBHqm7MlcSfXJVupOuh5TM-7183U";

const options = {
  method: "GET",
  headers: {
    Authorization: API_KEY,
    "Content-Type": "application/json;charset=utf-8",
  },
};

export const getMovies = async (
  page = 1
): Promise<{ results: Movie[]; total_pages: number }> => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return {
      results: data.results,
      total_pages: data.total_pages,
    };
  } catch (error) {
    console.error("Error fetching the movies:", error);
    throw error;
  }
};
