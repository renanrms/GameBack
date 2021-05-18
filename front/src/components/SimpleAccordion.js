import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckboxList from './CheckboxList'
import {
  Accordion, AccordionDetails, AccordionSummary, Typography
} from '@material-ui/core';


const mockData = {
  race: ['Humano', 'Elfo', 'Orc', 'Anão'],
  class: ['Guerreiro', 'Paladino', 'Mago', 'Druida'],
  profession: ['Lenhador', 'Minerador', 'Pescador']
}

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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Raças</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxList
            data={mockData.race}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Classes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxList
            data={mockData.class}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Profissões</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxList
            data={mockData.profession}
          />
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}

SimpleAccordion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAccordion);