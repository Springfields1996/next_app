import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "20px",
    width: 500,
    height: "auto",
  },
  image: {
    width: 128,
    height: "auto",
  },
  title_link: {
    "&:hover": {
      color: "darkblue",
    },
  },
}));

export const ProductCard = ({ product, product: {productName, brandName} }) => {
  const classes = useStyles();
  console.log(classes);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Image
                alt={`Photo of ${productName.toLowerCase()}${productName && ','} ${brandName}`}
                height="auto"
                width="100%"
                src={product.imageURLs[0]}
                loading="lazy"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Link href={product.pdpURL}>
                    <a className={classes.title_link}>{productName}</a>
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {brandName}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{product.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
