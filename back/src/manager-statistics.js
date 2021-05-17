const StatisticsTable = require('./mongodb/statistics.js')
const oneLessDay = require('./oneLessDay.js')

var time = new Date();
date = {
    'year':time.getFullYear(),
    'month':time.getMonth()+1,
    'day': time.getDate()
}


class ManagerStatistics {

    static async update(){
        let achou = await StatisticsTable.returnOneStatistics(date)
        if (achou != null)
        {
            let value = achou['value']
            StatisticsTable.updateOneStatistics(date,value+1)
        }
        else{
            StatisticsTable.registerStatistic(date,1)
        }
        return true
    }

    static async list(){

        var week = {}

        var aux = date
        for (let count=0;count<7;count++){
            let value = 0
            let today = await StatisticsTable.returnOneStatistics(aux)
            if (today!=null)
            {
                value = today['value']
            }
            
            week[count] = {...aux,...{'nlog':value}}
            aux = oneLessDay(aux)
        }

        return week    
    }


}

module.exports = ManagerStatistics;



