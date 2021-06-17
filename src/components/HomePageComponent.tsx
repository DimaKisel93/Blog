import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './styles'
import ArticlesComponent from './ArticlesComponent';
import { Link as RouterLink, LinkProps as RouterLinkProps, RouteComponentProps } from 'react-router-dom';


const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
  <RouterLink ref={ref} to="/blog/new" {...props} />
));

const HomePageComponent: FC<RouteComponentProps> = () => {
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
          <Button component={LinkBehavior} className={classes.addButtonArticle} variant="contained" color="secondary">
            Add article
          </Button>
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