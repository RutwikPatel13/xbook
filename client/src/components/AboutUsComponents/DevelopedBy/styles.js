import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "none",
    height: "25rem",
    marginBottom: "10px",
    width: "auto",
    cursor: "pointer",
    "@media (max-width : 700px)": {
      height: "70vh",
    },
  },
  frontCard: {
    backgroundColor: "#1769aa",
    padding: "1rem 0rem 1rem 0rem",
  },
  backCard: {
    padding: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  backCardContent: {
    backgroundColor: "#93c47d",
    height: "100%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  socialLink: {
    display: "inline",
  },

  Icon: {
    margin: "10px 10px 10px 10px",
    fontSize: "40px",
    transform: "scale(.9)",
    zIndex: "-1",

    transition: ".5s",
    "@media (max-width : 700px)": {
      margin: "0px 10px 10px 10px",
    },
  },

  img: {
    width: "100%",
    height: "80%",
    padding: "5px",
    border: "5px solid #34495e",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 1rem 1rem 1rem",
    alignSelf: "center",
    textAlign: "center",
    lineHeight: "25rem",
  },
}));
