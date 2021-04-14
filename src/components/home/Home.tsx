import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

import HomeCard from './HomeCard';
import { HomeCardType } from '../../types/homeCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();

  const renderCard = (card: HomeCardType) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={card.to}>
        <HomeCard card={card} />
      </Grid>
    );
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards
          .slice()
          .reverse()
          .map((card) => {
            return renderCard(card);
          })}
      </Grid>
    </Container>
  );
};

const cards: Array<HomeCardType> = [
  {
    headline: 'Practices',
    content: 'Types',
    to: '/practices',
  },
  {
    headline: 'Practice2',
    content: 'Todo, Text, UserProfile',
    to: '/practice2',
  },
  {
    headline: 'Custom Hook',
    content: '',
    to: '/custom_hook',
  },
  {
    headline: 'Chakra UI',
    content: (
      <a
        href="https://chakra-ui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
    ),
    to: '/chakraui',
  },
];

export default Home;
