function oneLessDay(date)
{
    lday = date['day'] - 1
    lmounth = date['month']
    lyear = date['year']
    
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
    return {year:lyear,month:lmounth,day:lday}
}


module.exports = oneLessDay;