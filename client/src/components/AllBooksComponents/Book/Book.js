import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container
} from "@material-ui/core/";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./style";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../actions/books";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { VALID } from "../../../constants/actions";
import {recSystem} from "../../../api/index.js"
const Book = ({book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [fav, setFav] = useState(false);
  
  const addtofavourite = () => {
      dispatch(addToWishList(book._id)); 
  };

  

  const getBook = () => {
    history.push(`/all/book/${book._id}`);
  };

  return (
      <Card raised className={classes.card}>
            <div className={classes.top}>
              <CardMedia
                className={classes.media}
                src="book"
                image={book.selectedFile}
              />

              <Typography className={classes.price}>
                {"₹"}
                {book.price}
              </Typography>

              
            </div>

            <Typography variant="h6" className={classes.BookName}>
              {book.bookName}
            </Typography>

            <div>
              <Typography variant="body2" className={classes.Branch}>
               -- {book.branch}
              </Typography>
            </div>

            

            

            <CardActions disableSpacing>
              <PersonPinIcon
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  color: "#e98074",
                }}
              />
              {user ? (
                <Link to={`/user/${book.owner}`} style={{ textDecoration: "none" }}>
                  <Typography className={classes.owner}>
                    {book.ownerName}
                  </Typography>
                </Link>
              ) : (
                <Link to={`/auth`} style={{ textDecoration: "none" }}>
                  <Typography className={classes.owner}>
                    {book.ownerName}
                  </Typography>
                </Link>
              )}
            </CardActions>

            <CardActions disableSpacing>
              <ScheduleIcon
                fontSize="small"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              />
              <Typography variant="body2">
                {moment(book.createdAt).format("DD MMM, YYYY")}
              </Typography>
            </CardActions>

            <Button variant="outlined" onClick={() => {getBook(); addtofavourite()}}  className={classes.button}>
              Book Details
            </Button>
          </Card>

  );
};

export default Book;




/*
<Typography variant="body2" className={classes.Description}>
              {book.description}
            </Typography>

            */