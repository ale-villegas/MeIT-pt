
import { useMoviesContext } from "../../context/MoviesContext";
import { Typography } from "@mui/material";
import ListOfMovies from "../ListOfMovies/ListOfMovies";

const Wishlist = () => {
  const { state, handleLike } = useMoviesContext();
  const { wishlist } = state;
  return (
    <>
      {wishlist.length < 1 ? (
        <Typography
          variant="h4"
          color="white"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
         Your wishlist is empty
        </Typography>
      ) : (
      <ListOfMovies movies={wishlist} handleLike={handleLike}/>
      )}
    </>
  );
};

export default Wishlist;
