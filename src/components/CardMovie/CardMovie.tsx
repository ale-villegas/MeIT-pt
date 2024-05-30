import { useMoviesContext } from "../../context/MoviesContext";
import { Movie } from "../../types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";

const urlImage = "https://image.tmdb.org/t/p/w185";

interface PropsCard {
  movie: Movie;
  handleLike: (movie: Movie) => void;
}

const CardMovie = ({ movie, handleLike }: PropsCard) => {
  const { state } = useMoviesContext();
  const { wishlist } = state;

  const alredyInWishlist = wishlist.find((el) => el.id === movie.id);

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgb(239, 239, 239)",
      }}
    >
      <CardMedia
        component="img"
        image={`${urlImage}${movie.poster_path}`}
        alt={`${movie.original_title} Poster`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {movie.original_title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          onClick={() => handleLike(movie)}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              fontSize: "11px",
              "&:hover": {
                backgroundColor: "rgb(95, 95, 95)",
              },
            }}
          >
            {alredyInWishlist ? "Unlike" : "Like"}
          </Button>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardMovie;
