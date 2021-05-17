function oneLessHour(date)
{
    lhours = date['hours'] - 1
    lday = date['day']
    lmounth = date['month']
    lyear = date['year']

    if (lhours == -1)
    {
        lhours = 23
        lday = lday-1
    }
    
    if (lday == 0)
    {
        m = lmounth-1
        lmounth = m

        if (m == 0)
        {
            lmounth = 12
            m=12
            lyear = lyear - 1
        }
        
        if ((m==1) || (m==3) || (m==5) || (m==7) || (m ==8) || (m == 10) || (m ==12))
        {
            lday = 31
        }
        else if (m == 2)
        {
            if(lyear%4==0)
            {
                lday = 29
            }
            else
            {
                lday = 28
            }
        }
        else 
        {
            lday = 30
        }
    }
    return {year:lyear,month:lmounth,day:lday,hours:lhours}
}


module.exports = PlayersTable;