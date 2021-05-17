const StatisticsTable = require('./mongodb/statistics.js')
const {oneLessHour} = require('./oneLessHour.js')

var time = new Date();
date = {
    'year':time.getFullYear(),
    'month':time.getMonth()+1,
    'day':time.getDate(),
    'hours':time.getHours()
}


class ManagerStatistics {

    async update(Ivalue){

        if (returnOneStatistics(date) != {})
        {
            today = StatisticsTable.returnOneStatistics(date)
            StatisticsTable.updateOneStatistics(date,value+1)
        }
        else{
            StatisticsTable.registerStatistic(date,0)
        }
    }

    async list(){

        week = {}

        aux = date
        for (let count=0;count<7;count++){
            let value = 0
            today = StatisticsTable.returnOneStatistics(aux)
            value = today['value']
            
            week[count] = {...aux,...{'nlog':value}}
            aux = oneLessHour(aux)
        }

        console.log(week)

        return week    
    }


}

module.exports = {ManagerStatistics}



