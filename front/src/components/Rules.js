import React, { useState, useEffect } from 'react';
import RuleCard from './RuleCard';
import { makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import NewRuleDialog from './NewRuleDialog';
import { listRules } from '../api/rules'

const mockData = [
  {
    title: "Exemplo de regra 1",
    date: "15/05/2020",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo vel lacus in dictum.
            Fusce mauris ante, dignissim vitae vehicula id, viverra at orci.
            Nullam erat magna, feugiat et metus id, egestas aliquam ligula. `
  }, {
    title: "Exemplo de regra 2",
    date: "15/05/2020",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo vel lacus in dictum.
              Fusce mauris ante, dignissim vitae vehicula id, viverra at orci.
              Nullam erat magna, feugiat et metus id, egestas aliquam ligula. `
  }, {
  title: "Exemplo de regra 3",
  date: "15/05/2020",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo vel lacus in dictum.
              Fusce mauris ante, dignissim vitae vehicula id, viverra at orci.
              Nullam erat magna, feugiat et metus id, egestas aliquam ligula. `
  }, {
  title: "Exemplo de regra 4",
  date: "15/05/2020",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo vel lacus in dictum.
              Fusce mauris ante, dignissim vitae vehicula id, viverra at orci.
              Nullam erat magna, feugiat et metus id, egestas aliquam ligula. `
  }, {
    title: "Exemplo de regra 5",
    date: "15/05/2020",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo vel lacus in dictum.
              Fusce mauris ante, dignissim vitae vehicula id, viverra at orci.
              Nullam erat magna, feugiat et metus id, egestas aliquam ligula. `
  }
]

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: '17px',
    marginBottom: '20px'
  },
}));

export default function Rules() {
  const classes = useStyles();

  const [rules, setRules] = useState([]);

  useEffect(() => {
    listRules()
    .then(response => {
      //TODO: setRules(response);
      setRules(mockData)
    })
  }, []);

  const renderCardList = () => {
    return (
      <GridList>
        {rules.map(
          (rule, index) => (
            <RuleCard
              key={index}
              title={rule.title}
              date={rule.date}
              content={rule.content}
            />
          )
        )}
     </GridList>
    )
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Regras</h1>
      <NewRuleDialog />
      {renderCardList()}
    </>
  );
}