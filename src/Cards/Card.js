import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import countryFlag from "./flags"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 345,
    flexDirection: "column",
    float: "left",
    marginRight: 10,
    marginBottom: 40,
    marginLeft: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SimpleCards({
  country,
  infected,
  deceased,
  lastUpdatedSource,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const daysFunction = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, "0");
    let year = dateObj.getFullYear();
    let output = month + "\n" + day + "," + year;
    return output;
  };
 
  lastUpdatedSource = daysFunction();
  return (
    <Card className={classes.root}>
      <CardHeader
        shadows={3}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            COVID-19
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Coronavirus Pandemic"
        subheader={daysFunction()}
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="List Of Countries"
      />
      <CardContent>
        {countryFlag(country)}
        <Typography
          gutterBottom
          variant="h5" component="h2"
        >
          {country}
        </Typography>
        <Typography variant="h5" component="h2">
          Cases: {infected}
        </Typography>
        <Typography
          className={classes.pos}
          variant="h5"
          component="h2"
          
        >
          Death: <span style={{color: "red"}}>{deceased}</span>
        </Typography>
        <Typography variant="body2" component="p">
          Updated: {lastUpdatedSource}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>WHO GUIDELINE:</Typography>
          <Typography paragraph>
            <b>Wash Your hands</b>
            <br />
            Wash your hands frequently Regularly and thoroughly clean your hands
            with an alcohol-based hand rub or wash them with soap and water.
            Why? Washing your hands with soap and water or using alcohol-based
            hand rub kills viruses that may be on your hands.
          </Typography>
          <Typography paragraph>
            <b>Maintain social distancing</b>
            <br />
            Maintain at least 1 metre (3 feet) distance between yourself and
            anyone who is coughing or sneezing.
            <b>Why?</b>
            <br /> When someone coughs or sneezes they spray small liquid
            droplets from their nose or mouth which may contain virus. If you
            are too close, you can breathe in the droplets, including the
            COVID-19 virus if the person coughing has the disease.
          </Typography>
          <Typography paragraph>
            <b>Avoid touching eyes, nose and mouth</b>
            <br /> <b>Why?</b>
            <br /> Hands touch many surfaces and can pick up viruses. Once
            contaminated, hands can transfer the virus to your eyes, nose or
            mouth. From there, the virus can enter your body and can make you
            sick.
          </Typography>
          <Typography paragraph>
            <b>Practice respiratory hygiene</b>
            <br /> Make sure you, and the people around you, follow good
            respiratory hygiene. This means covering your mouth and nose with
            your bent elbow or tissue when you cough or sneeze. Then dispose of
            the used tissue immediately. <b>Why?</b>
            <br /> Droplets spread virus. By following good respiratory hygiene
            you protect the people around you from viruses such as cold, flu and
            COVID-19.
          </Typography>
          <Typography>
            <b>
              If you have fever, cough and difficulty breathing, seek medical
              care early
            </b>
            <br /> Stay home if you feel unwell. If you have a fever, cough and
            difficulty breathing, seek medical attention and call in advance.
            Follow the directions of your local health authority. <b>Why?</b>{" "}
            National and local authorities will have the most up to date
            information on the situation in your area. Calling in advance will
            allow your health care provider to quickly direct you to the right
            health facility. This will also protect you and help prevent spread
            of viruses and other infections.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
