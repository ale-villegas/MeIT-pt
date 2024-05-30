import { Movie } from '../../types'
import CardMovie from '../CardMovie/CardMovie'

interface PropsListofMovies {
  movies: Movie[], 
  handleLike: (movie: Movie) => void
}

const ListOfMovies = ({movies, handleLike} : PropsListofMovies) => {
  return (
    <main>
    {movies.map((movie) => (
      <CardMovie key={movie.id} movie={movie} handleLike={() => handleLike(movie)} />
    ))}
  </main>
  )
}

export default ListOfMovies