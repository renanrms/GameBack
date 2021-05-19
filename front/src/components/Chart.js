import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { listStatistics} from "../api/statistics"

export default function Chart() {
  const theme = useTheme();

  const [statistics, setStatistics] = useState();

  useEffect(() => {
    listStatistics()
      .then(response => {
        const { code, data } = response;
        if (code == 200) {
          let formattedResponse = formatResponseData(data)
          setStatistics(formattedResponse)
        }
      })
  }, []);

  function createData(time, amount) {
    return { time, amount };
  }

  function formatResponseData(data) {
    return (data.map(({_id: {day: day, month: month, year: year}, value: value}) => {
      let date = new Date(year, month, day);
      return createData(date, value)
    }).sort((a, b) => {
      return a.time - b.time
    })).map(({time: time, amount: amount}) => {
      let formattedDate = moment.utc(time).local().format('DD/MM')
      return createData(formattedDate, amount)
    })
  }

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={statistics}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}></XAxis>
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