import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  back: {
    position: "absolute",
    margin: 20,
    marginTop: 20,
    color: "white",
    zIndex: 10,
    [theme.breakpoints.down(900)]: {
      marginTop: 35,
    },
  },

  topContainer: {
    position: "relative",
    width: "100%",
    height: "200px",
    zIndex: "10",
    paddingTop: "20px",
    backgroundImage:
      "linear-gradient(rgba(0,1,1,0.3),rgba(1,0,0.5)),url('https://res.cloudinary.com/xbook/image/upload/v1649216690/xbook/background-1_kiqjmf.jpg')",
    "@media (max-width : 700px)": {
      height: "275px",
      paddingTop: "40px",
    },
  },

  bottomLeft: {
    color: "black",
    fontSize: "60px",
    paddingLeft: "8%",
    position: "absolute",
    bottom: "8px",
    left: "16px",
    "@media (max-width : 700px)": {
      fontSize: "30px",
      paddingLeft: "4%",
    },
  },

  topLeft: {
    color: "white",
    margin: "10px",
    fontSize: "40px",
    "@media (max-width : 700px)": {
      margin: "10px",
      fontSize: "25px",
    },
  },

  edition: {
    fontSize: "30px",
    color: "white",
    display: "inline",
    "@media (max-width : 700px)": {
      fontSize: "15px",
    },
  },

  branch: {
    color: "white",
    width: "200px",
    minWidth: "10px",
    padding: "3px 5px",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "1.5",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    textShadow: "none",
    "@media (max-width : 700px)": {
      fontSize: "10px",
      width: "125px",
    },
  },

  date: {
    color: "white",
    fontSize: "15px",
    "@media (max-width : 700px)": {
      fontSize: "9px",
    },
    zIndex: "-2",
  },

  bookMain: {
    color: "white",
    display: "inline-block",
  },
  price: {
    display: "inline-block",
    fontSize: "25px",
    fontWeight: "600",
    color: "white",
    marginLeft: "100px",
    "@media (max-width : 700px)": {
      fontSize: "15px",
      marginLeft: "0px",
    },
  },

  middleContainer: {
    display: "flex",
    flexDirection: "row",
    color: "black",
    position: "relative",
    paddingTop: "20px",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingBottom: "20px",
    background: "#cfe2f3",
    width: "100%",
    margin: "auto",
    height: "auto",

    "@media (max-width : 700px)": {
      paddingLeft: "2%",
      paddingRight: "2%",
      display: "inline",
      background: "#cfe2f3",
    },
  },

  imgAndInfo: {
    display: "block",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  bookDetails: {
    display: "inline",
    width: "1000px",
    marginRight: "0px",
    backgroundColor: "",
    padding: "1px",
    borderRadius: "5px",
    boxShadow: "1px 1px 30px 2px grey",
    "@media (max-width : 900px)": {
      width: "100%",
      marginRight: "0px",
    },
  },

  bookImage: {
    width: "300px",
    height: "400px",
    margin: "20px",
    float: "left",
    display: "inline-block",
    "@media (max-width : 900px)": {
      width: "100%",
      height: "400px",
      margin: "0px",
      padding: "20px",
    },
  },
  timeline: {
    color:"green",
    
  },
  timeline2: {
    color:"blue",
    
  },

  list: {
    lineHeight: "35px",
    font: "16px Sans-serif ",
    width: "auto",
    display: "inline-block",

    padding: "15px",
    marginTop: "0px",
    marginBottom: "75px",
    "@media (max-width : 700px)": {
      width: "100%",
      margin: "0px",
      padding: "20px",
    },
  },

  bookDescription: {
    display: "block",
    margin: "20px",
    paddingRight: "",
    "@media (max-width : 700px)": {
      width: "100%",
      margin: "0px",
      padding: "20px",
    },
    wordWrap: "break-word",
  },

  socialMediaButton: {
    margin: "4px",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },

  name: {
    color: "#1769aa",
    "&:hover": {
      color: "#34495e",
    },
  },

  name2: {
    color: "red",
    "&:hover": {
      color: "#34495e",
    },
  },

  sideContainer: {
    color: "black",
    display: "inline",
    width: "350px",
    backgroundColor: "#d9d2e9",
    height: "auto",
    padding: "20px",
    marginLeft: "10px",
    borderRadius: "5px",
    boxShadow: "1px 1px 30px 2px grey",
    "@media (max-width : 700px)": {
      width: "100%",
      padding: "20px",
      marginLeft: "0px",
    },
  },

  contactUser: {
    display: "block",
    margin: "5px",
  },

  UserInfo: {
    margin: "10px",
    fontSize: "29px",
  },
  userProfilePic: {
    height: "80px",
    width: "80px",
    borderRadius: "50%",
    float: "left",
    marginRight: "10px",
  },

  chatBox: {
    marginTop: "40px",
    width: "100%",
  },

  SendButton: {
    width: "100%",
    marginTop: "10px",
    backgroundColor: "#DF4C73",
  },

  guidelines: {
    display: "block",
    margin: "20px",
  },

  guidelineList: {
    lineHeight: "30px",
    font: "14px Sans-serif ",
    paddingLeft: "0px",
    "@media (max-width : 700px)": {
      width: "100%",

      paddingRight: "10px",
    },
  },

 
}));

export default styles;
