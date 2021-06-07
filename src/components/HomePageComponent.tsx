import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './styles'
import ArticlesComponent from './ArticlesComponent';

const HomePageComponent = () => {
    const classes = useStyles();

    return (
      <>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>      
            <Typography variant="h6" color="primary">
              Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>Blog</Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h6" color="primary">
            Article
          </Typography>
          <ArticlesComponent />
          <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10} />
          </Box>
        </Container>
      </>
    );
}
  
export default HomePageComponent;