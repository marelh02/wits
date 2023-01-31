import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './adc.css';
import { Link } from 'react-router-dom';


export default function ArticleDescriptionCard(props) {
  let d = props.description
  
  return (
    <Card sx={{ maxWidth: '70%' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {d.writerFullName}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {d.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {d.description}
            </Typography>
            {/* Ajouter les sujets de l'article par un grid*/}
            <Grid container spacing={1}>
              {(d.topics).map((x,i)=><Grid item key={i} xs={3}>{x}</Grid>)}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <img src={d.coverImg} alt="cover_img" />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={"/articles/"+d.identifiant}>Lire</Button>
      </CardActions>
    </Card>
  );
}