import React, { useEffect, useState } from "react";
import useStyles from "./styles.js";
import { Link as RouterLink, useHistory } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Icon from '@mui/material/Icon';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Container, Typography, Link } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Error404 from "../../ErrorComponent/Error404";
import { GET_BOOK } from "../../../constants/actions";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "../../AllBooksComponents/Book/Book";
import DisplayImagesCarousel from "../../AllBooksComponents/BookInfo/DisplayImagesCarousel";
import TimeLine from "./TimeLine.js";
import Grid from '@material-ui/core/Grid';
import { Stack } from '@mui/material';


const BookInfo = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const book = useSelector((state) => state.book);

  const filterbooks = useSelector((state) => state.books);
  
  const bookId = match.params.bookId;

  const [found] = useState(books.find((bk) => bk._id === bookId) !== undefined);
  const [contact_URL, setContact_URL] = useState("/auth");
  const localUser = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    localUser ? setContact_URL(`/user/${book.owner}`) : setContact_URL("/auth");
  });
  const condition2 = "ok"
  useEffect(() => {
    if (books.find((bk) => bk._id === bookId) !== undefined) {
      dispatch({
        type: GET_BOOK,
        payload: books.find((bk) => bk._id === bookId),
      });
    }
  }, [dispatch]);

  
  console.log("filterbook",filterbooks);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 264, min: 0 },
      items: 1,
    },
  };
  const displayImages = [
    {
      label: "Cover",
      imgPath: book.selectedFile
    },
    {
      label: "Cover2",
      imgPath: book.Cover2    
    },
    {
      label: "page1",
      imgPath:book.Page1
    },
    {
      label: "page2",
      imgPath:book.Page2
    }
  ];
  
  return found ? (
    <>
      <div className={classes.root}>
        <div className={classes.topContainer}>
          <ArrowBackIcon
            style={{ cursor: "pointer" }}
            className={classes.back}
            onClick={() => history.goBack()}
          ></ArrowBackIcon>

          <Typography className={classes.bottomLeft}>
            <div className={classes.bookMain}>
              
              {book.bookName}
              <div className={classes.edition}>
                {" ("}
                {book.edition}
                {" edition)"}
              </div>
              <div className={classes.date}>
                {"Posted on: "}
                {moment(book?.createdAt).format("DD MMM, YYYY")}
              </div>
            </div>
            <div className={classes.price}>
              {
              (book.price*60)/100}
              {"₹ ("}
              {book.priceType}

              {")"}
            </div>
          </Typography>
        </div>

        <div className={classes.middleContainer}>
          <div className={classes.bookDetails}>
            <div className={classes.imgAndInfo}>
            <Grid container spacing={10}>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <div className={classes.bookImage}>
                      <DisplayImagesCarousel 
                      cover1={book.selectedFile} 
                      cover2={book.Cover2}
                      page1={book.Page1}
                      page2={book.Page2} 
                      />    
                    </div>
                    <div  >
                    <TimeLine ></TimeLine>
                    </div>
                </Stack>               
              </Grid>
              <Grid item xs={8}>

                <div>
                  <ul style={{ listStyleType: "none" }} className={classes.list}>
                    <li>
                      Name: <span className={classes.name2}>{book.bookName}</span>
                      <span className={classes.name2}>
                        {<VerifiedIcon  color ="primary" style={{
                    display: "inline",
                    padding: "1px",
                    margin: "0 10px 0 0",
                   }}></VerifiedIcon> && book.legitacy=="legit"} 
                        
                        </span>
                       
                    </li>

                    <li>
                      Subject:{" "}
                      <span className={classes.name}>{book.subject}</span>
                    </li>
                    <li>
                    Semester:{" "}
                      <span className={classes.name}>
                        {book.semester}
                      </span>
                    </li>
                    <li>
                      Branch: <span className={classes.name}>{book.branch}</span>
                    </li>
                    
                    <li>
                      MRP{"(₹)"}:{" "}
                      <span className={classes.name}>
                        {book.price}
                        
                      </span>
                    </li>

                    <li>
                      Condition Predicted:{" "}
                      <span className={classes.name2}>
                        {book.conditionOfBookPredicted}
                        {book.conditionOfBookPredicted==null&& condition2
                        }
                        </span>
                    </li>

                    <li>
                      Discounted Price{"(₹)"}:{" "}
                      <span className={classes.name2}>
                        {book.conditionOfBookPredicted=='excellent'&&(book.price*70)/100
                        }
                        {book.conditionOfBookPredicted=='ok'&&(book.price*60)/100
                        
                        } 
                        {book.conditionOfBookPredicted=='good'&&(book.price*50)/100
                        }
                        {book.conditionOfBookPredicted=='bad'&&(book.price*40)/100
                        }
                        {book.conditionOfBookPredicted==null&&(book.price*60)/100
                        }
                        
                        {" ("}
                        {book.priceType}
                                              
                        {")"}
                      </span>
                    </li>

                    <li>
                      Condition:{" "}
                      <span className={classes.name2}>{book.condition}</span>
                    </li>
                    <li>
                      Author/Publication:{" "}
                      <span className={classes.name}>{book.author}</span>
                    </li>
                    <li>
                      Edition:{" "}
                      <span className={classes.name}>
                        {book.edition}
                        {"th"}
                      </span>
                    </li>
                    <li>
                      Edition year:{" "}
                      <span className={classes.name}>
                        {book.edition_year}
                      </span>
                    </li>
                    <li>
                      Number of pages:{" "}
                      <span className={classes.name}>
                        {book.noOfPages}
                        {"+"}
                      </span>
                    </li>
                    <li>
                    Publisher:{" "}
                      <span className={classes.name}>
                        {book.publisher}
                      </span>
                    </li>
                    
                    <li>
                    First Use:{" "}
                      <span className={classes.name2}><b>
                        {book.first_use}
                        </b></span>
                    </li>
                    <li>
                      ISBN:{" "}
                      <span className={classes.name}>
                        {book.isbn}
                      </span>
                    </li>
                    <li>
                    University:{" "}
                      <span className={classes.name}>
                        {book.university}
                      </span>
                    </li>
                    <li>
                    Course:{" "}
                      <span className={classes.name}>
                        {book.course}
                      </span>
                    </li>
                    <li>
                    Verification status:{" "}
                      <span className={classes.name}>
                        {book.legitacy}
                      </span>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
                
            </div>

            <div className={classes.bookDescription}>
              <Typography variant="h5">Description</Typography>
              <Typography variant="body1">{book.description}</Typography>
              <div>
                <FacebookShareButton
                  url={window.location.href}
                  quote={
                    "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
                  }
                  hashtag="#Xbook"
                >
                  <FacebookIcon
                    size={36}
                    className={classes.socialMediaButton}
                  />
                </FacebookShareButton>
                <TwitterShareButton
                  title={
                    "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
                  }
                  via={window.location.href}
                  hashtags="#Xbook"
                >
                  <TwitterIcon
                    size={36}
                    className={classes.socialMediaButton}
                  />
                </TwitterShareButton>
                <WhatsappShareButton
                  title={
                    "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
                  }
                  seperator={window.location.href}
                >
                  <WhatsappIcon
                    size={36}
                    className={classes.socialMediaButton}
                  />
                </WhatsappShareButton>
                <EmailShareButton
                  subject={"Buy second hand books on XBook"}
                  body={window.location.href}
                  seperator={
                    "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
                  }
                >
                  <EmailIcon size={36} className={classes.socialMediaButton} />
                </EmailShareButton>
              </div>
              <div style={{ padding: "10px 5px" }}>
                <LocalOfferIcon
                  style={{
                    display: "inline",
                    color: "#e85a4f",
                    padding: "1px",
                    margin: "0 10px 0 0",
                  }}
                />
                {book?.tags?.map((tags) => (
                  <Typography variant="body2" style={{ display: "inline" }}>
                    {" | "}
                    {tags}
                    {"  "}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
          
          
          <div className={classes.sideContainer}>
            <div
              className={classes.contactUser}
              style={{ border: "2px solid black" }}
            >
              <div className={classes.UserInfo}>
                <img
                  className={classes.userProfilePic}
                  src="https://res.cloudinary.com/xbook/image/upload/v1649225431/xbook/seller_avatar_jo1ayd.png"
                  alt="User Profile"
                  loading="lazy"
                />
                <Typography variant="h6">{book.ownerName}</Typography>
                <Link
                  color="inherit"
                  to={contact_URL}
                  component={RouterLink}
                  key="Home"
                  className={classes.name}
                  underline="none"
                >
                  <Typography 
                  variant="body2"
                  style={{
                    color: "#34495e",
                  }}
                  >
                    View Profile
                    </Typography>
                </Link>
                <br />
                <Link
                  // to="/auth"
                  to={contact_URL}
                  component={RouterLink}
                  key="Home"
                  className={classes.name}
                  underline="none"
                >
                  <Typography
                    variant="body2"
                    style={{
                      color: "white",
                      fontSize: "22px",
                      textAlign: "center",
                      padding: "5px",
                      backgroundColor: "#1769aa",
                      borderRadius: "30px",
                      border: "2px solid black",
                    }}
                  >
                    Contact Seller
                  </Typography>
                </Link>
              </div>
            </div>
            <div className={classes.guidelines}>
              <Typography variant="h6">Read before you deal</Typography>
              <div>
                <ul
                  style={{ listStyleType: "none" }}
                  className={classes.guidelineList}
                >
                  <li>1. Use a safe location to meet seller</li>
                  <li>2. Never provide your personal or banking information</li>
                  <li>3. Beware of unrealistic offers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "rgb(234,231,220)" }}>
        <Typography
          align="center"
          style={{
            fontSize: "20px",
            position: "Centre",
            padding: "5px 0 5px 0",

            color: "black",
          }}
        >
          {"Mention "}
          <Link
            to="/"
            component={RouterLink}
            key="Home"
            className={classes.name}
          >
            XBook
          </Link>{" "}
          {" while contacting seller to get a good deal."}
        </Typography>
      </div>

      <div style={{ background: "rgb(234,231,220)", padding: "20px" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            background: "rgb(234,231,220)",
            paddingTop: "10px",
          }}
        >
          Similar Books
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "300px",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />
        
          <div
            style={{
              padding: "20px 10px",
              background: "rgb(234,231,220)",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={6000}
            >
              
              

                <Book key = {filterbooks[0]._id} book= {filterbooks[0]}/>
                <Book key = {filterbooks[1]._id} book= {filterbooks[1]}/>
                <Book key = {filterbooks[2]._id} book= {filterbooks[2]}/>
                <Book key = {filterbooks[3]._id} book= {filterbooks[3]}/>
                <Book key = {filterbooks[4]._id} book= {filterbooks[4]}/>
              
                       
              
              
              
            </Carousel>
          </div>
        
      </div>
    </>
  ) : (
    <Error404 />
  );
};

export default BookInfo;
