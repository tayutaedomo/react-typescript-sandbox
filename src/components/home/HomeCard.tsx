import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { HomeCardType } from '../../types/homeCard';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

type Props = {
  card: HomeCardType;
};

const HomeCard: VFC<Props> = (props) => {
  const { card } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {card.headline}
        </Typography>
        <Typography>{card.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={card.to}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
