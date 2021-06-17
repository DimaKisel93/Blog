import React, {useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { ContextApp } from '../state/reducer';

const ArticlesComponent = () => {
    const classes = useStyles();

    const { state }= useContext(ContextApp);
    
    return(
      <Grid container spacing={3}>
        {state && state.articles.map( (article) => (
           <Grid key={article.id} item xs={12} sm={6} md={4}>
           <Card className={classes.card}>
             <CardActionArea>
               <CardMedia
               className={classes.media}
               image="https://images.unsplash.com/flagged/photo-1579782647395-2e6fb36a64f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=437&q=80"
               title="Contemplative Reptile"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                     {article.title}
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                       {article.body}
                 </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
         </Grid>
        ))}
      </Grid>
    )
}

export default ArticlesComponent