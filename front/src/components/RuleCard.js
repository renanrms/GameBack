import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditRuleDialog from './EditRuleDialog'
import DeleteRuleDialog from './DeleteRuleDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: '20px',
    marginLeft: '20px',
    backgroundColor: '#e9ecef'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function RuleCard({title, date, content}) {
  const classes = useStyles();

  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false);

  const handleOpenDeleteRuleDialog = () => {
    setIsOpenDeleteDialog(true)
  }

  const handleCloseDeleteRuleDialog = () => {
    setIsOpenDeleteDialog(false)
  }

  const handleOpenEditRuleDialog = () => {
    console.log("clickou no edit")
    setIsOpenEditDialog(true)
  }

  const handleCloseEditRuleDialog = () => {
    setIsOpenEditDialog(false)
  }

  return (
    <>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleOpenDeleteRuleDialog}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="settings" onClick={handleOpenEditRuleDialog}>
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={title}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    <DeleteRuleDialog
      open={isOpenDeleteDialog}
      handleClose={handleCloseDeleteRuleDialog}
      title={title}
    />
    <EditRuleDialog
      open={isOpenEditDialog}
      handleClose={handleCloseEditRuleDialog}
    />
    </>
  );
}

RuleCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string
}


export default RuleCard;