import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    margin: "2px",
    backgroundColor: "#1769AA",
    "&:hover": {
      backgroundColor: "#34495e",
    },
    width: theme.spacing(3),
    height: theme.spacing(4),
  },
}));
