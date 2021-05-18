import React, { useState, useEffect } from 'react';
import RuleCard from './RuleCard';
import { GridList } from '@material-ui/core';
import NewRuleDialog from './NewRuleDialog';
import { listRules } from '../api/rules'


export default function Rules() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    showAllRules()
  }, []);

  const showAllRules = () => {
    listRules()
      .then(response => {
        const { code, data } = response
        if (code == 200) {
          setRules(data)
        }
      })
  }

  const renderCardList = () => {
    return (
      <GridList>
        {rules.map(
          (rule, index) => (
            <RuleCard
              key={index}
              title={rule._id}
              // date={rule.date}
              content={rule.content}
              showAllRules={showAllRules}
            />
          )
        )}
     </GridList>
    )
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Regras</h1>
      <NewRuleDialog
        showAllRules={showAllRules}
      />
      {renderCardList()}
    </>
  );
}