import { Typography } from "@mui/material";
import { useMoviesContext } from "../../context/MoviesContext";
import Pagination from "../Pagination/Pagination";
import { Suspense, lazy } from "react"; 


const ListOfMovies = lazy(() => import('../ListOfMovies/ListOfMovies'));

const Home = () => {
  const { state, nextPage, prevPage, handleLike } = useMoviesContext();
  const { results, currentPage, totalPages } = state;

  return (
    <>
    <Suspense fallback={
        <Typography
          variant="h4"
          color="white"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
          Loading...
        </Typography>
      }>
        <ListOfMovies movies={results} handleLike={handleLike} />
      </Suspense>
      <Pagination
        currentPage={currentPage}
        onNextPage={nextPage}
        onPrevPage={prevPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Home;
