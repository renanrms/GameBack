import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';

//import statistc
import { listStatistics} from "../api/statistics"

// Generate Data
function createData(time, amount) {
  return { time, amount };
}


// let a = listStatistics()
//       .then(response => {
//         const { code, data } = response // data = { 0: {year:2021,month:5,day:18,nlog:0}, 1:{}, ... 6:{}}
//         let time = []
//         let log = []
//         for (let cont = 0; cont < Object.keys(data).length;cont++)
//         {
//           time[cont]=data[cont]['day'] + '/' + data[cont]['month'] + '/' + data[cont]['year']
//           log[cont]= data[cont]['nlog']
//         }
//         const dataA = [
//           createData(time[6],log[6]),
//           createData(time[5],log[5]),
//           createData(time[4],log[4]),
//           createData(time[3],log[3]),
//           createData(time[2],log[2]),
//           createData(time[1],log[1]),
//           createData(time[0],log[0])
//         ];
// })

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      {/* <Title>Today</Title> */}
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Número de acessos
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}