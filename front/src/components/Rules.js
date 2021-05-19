import React, { useState, useEffect } from 'react';
import RuleCard from './RuleCard';
import { GridList } from '@material-ui/core';
import NewRuleDialog from './NewRuleDialog';
import { listRules } from '../api/rules'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Rules() {
  const [rules, setRules] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarAlertSeverity, setSnackbarAlertSeverity] = useState("success")

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

  function handleOpenSnackbar(message, severity) {
    setSnackbarMessage(message)
    setSnackbarAlertSeverity(severity)
    setOpenSnackbar(true)
  }

  function handleCloseSnackbar() {
    setOpenSnackbar(false)
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
              handleOpenSnackbar={handleOpenSnackbar}
            />
          )
        )}
     </GridList>
    )
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Regras</h1>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarAlertSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <NewRuleDialog
        showAllRules={showAllRules}
        handleOpenSnackbar={handleOpenSnackbar}
      />
      {renderCardList()}
    </>
  );
}