import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: "250px",
    },
  },
}));

export const SearchForm = ({
  filterQuery,
  handleSubmit,
  handleClick,
}) => {
  const classes = useStyles();

  return (
      <form
        className={classes.root}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <TextField
          id="outlined-basic"
          value={filterQuery}
          placeholder="Search..."
          onChange={handleClick}
          variant="outlined"
        />
      </form>
  );
};
