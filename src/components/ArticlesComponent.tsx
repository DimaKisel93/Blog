import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const ArticlesComponent = () => {
    const classes = useStyles();

    return(
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/flagged/photo-1579782647395-2e6fb36a64f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=437&q=80"
              title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Tesla failed to stop Musk tweets, says regulator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    In 2018, the US Securities and Exchange Commission (SEC) accused Mr Musk of misleading investors, after he made claims about taking Tesla private.
                    An agreement was made requiring Tesla's lawyers to pre-approve certain tweets.
                    But documents obtained by the Wall Street Journal suggest the regulator believes Mr Musk and Tesla have broken the terms of that deal.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Do we need React useReducer Typescript?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    We will base our code on an example from the official React documentation. The demo linked from this article is a simple implementation of a very common pattern - fetching a list of items from some backend service. In this case, we’re fetching a list of Hacker News article headers.
                    What functionality is missing in this little demo? When fetching data from backend it’s useful to indicate.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Apple's all-online Worldwide Developers Conference (WWDC)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Apple News debuted with iOS 9 as a replacement for Newsstand. Using RSS and publication feeds, the app gathers articles from across the web and sorts them into a news feed.
                    The service is available as a native and pre-installed app for iOS, iPadOS, and macOS.Users can subscribe to their preferred publications, like or dislike articles, and save stories for offline reading.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
      </Grid>
    )
}

export default ArticlesComponent