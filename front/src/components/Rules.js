import React from 'react';

import RuleCard from './RuleCard';

import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const data = {
  title: "Exemplo de regra",
  date: "15/05/2020",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo vel lacus in dictum.
            Fusce mauris ante, dignissim vitae vehicula id, viverra at orci.
            Nullam erat magna, feugiat et metus id, egestas aliquam ligula. `
}
const array = [1,2,3,4,5]


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: '17px',
    marginBottom: '20px'
  },
}));

export default function Rules() {

  const classes = useStyles();

  const renderCardList = () => {
    return (
      <GridList>
        {array.map(
          ({ name, key }) => (
              <RuleCard
              title={data.title}
              date={data.date}
              content={data.content}
            />
          )
        )}
     </GridList>
    )
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Regras</h1>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Adicionar nova Regra
      </Button>
      {renderCardList()}
    </>
  );
}