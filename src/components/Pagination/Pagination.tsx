import { Box, Button, Typography } from "@mui/material";

interface PropsPagination {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

function Pagination({
  currentPage,
  onNextPage,
  onPrevPage,
  totalPages,
}: PropsPagination) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(49, 49, 49);",
        color: "white",
        borderTop: "solid 1px white",
      }}
    >
      <Button onClick={onPrevPage} disabled={currentPage === 1} color="inherit">
        Prev
      </Button>
      <Typography  sx={{ mx: 2 }}>
        Page {currentPage} of {totalPages}
      </Typography>
      <Button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        color="inherit"
      >
        Next
      </Button>
    </Box>
  );
}

export default Pagination;
