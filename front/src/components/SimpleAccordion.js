import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckboxList from './CheckboxList'


import {
  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleAccordion(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Raças</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CheckboxList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Classes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CheckboxList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Profissões</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CheckboxList />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <ExpansionPanel disabled>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel> */}
    </div>
  );
}

SimpleAccordion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAccordion);