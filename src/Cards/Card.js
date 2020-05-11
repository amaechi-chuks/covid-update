import React, {useState} from "react";
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
import { red, brown } from "@material-ui/core/colors";
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
  cardContent: {
    backgroundColor: brown[50],
  }
}));

export default function SimpleCards({
  name,
  total_cases,
  active_cases,
  tested,
  critical,
  recovered,
  deaths,
  death_ratio,
  recovery_ratio,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [count, setCount] = useState(0);
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
 
  let countryName = name.replace(/^./, name[0].toUpperCase());
  let recovery_ratios = recovery_ratio.toFixed(4)
  let death_ratios = death_ratio.toFixed(4)
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzQdjpFtk4ax2YfivGmDYZVcRAsHblgXtU07pjiurtEYrMgcGw&usqp=CAU"
        title="List Of Countries"
      />
      <CardContent className={classes.cardContent}>
        {countryFlag(name)}
        <Typography
          gutterBottom
          variant="h5" component="h2"
        >
          {countryName}
        </Typography>
        <Typography variant="h5" component="h2">
          Cases: {total_cases}
        </Typography>
        <Typography variant="h5" component="h2">
          Active_cases: {active_cases}
        </Typography>
        <Typography variant="h5" component="h2">
          Critical: {critical}
        </Typography>
        <Typography variant="h5" component="h2">
          Tested: {tested}
        </Typography>
        <Typography variant="h5" component="h2">
          Recovered: <span style={{color: "green"}}>{recovered}</span>
        </Typography>
        <Typography
          className={classes.pos}
          variant="h5"
          component="h2"
          
        >
          Death: <span style={{color: "red"}}>{deaths}</span>
        </Typography>
       
        <Typography variant="h5" component="h2">
          Death_ratio: {death_ratios}
        </Typography>
        <Typography variant="h5" component="h2">
          recovered_ratio: {recovery_ratios}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <div>{count}</div>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon onClick={()=> setCount(count + 1)}/>
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
