import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Title from './Title';

// Generate Order Data
function createData(id, name, date, score) {
  return { id, name, date, score };
}

const rows = [
  createData(0, 'Elvis Presley', '16 Mar, 2019', 312.44),
  createData(1, 'Paul McCartney', '16 Mar, 2019', 866.99),
  createData(2, 'Tom Scholz', '16 Mar, 2019', 100.81),
  createData(3, 'Michael Jackson', '16 Mar, 2019', 654.39),
  createData(4, 'Bruce Springsteen', '15 Mar, 2019', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function DataTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Criado em</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais jogadores
        </Link>
      </div>
    </React.Fragment>
  );
}