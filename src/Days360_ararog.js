function days360(initialDate, currentDate) {

    var dateA = initialDate;

    var dateB = currentDate;

    var dayA = dateA.getDate();

    var dayB = dateB.getDate();

    if (lastDayOfFebruary(dateA) && lastDayOfFebruary(dateB))
        dayB = 30;

    if (dayA == 31 && lastDayOfFebruary(dateA))
        dayA = 30;

    if (dayA == 30 && dayB == 31)
        dayB = 30;

    days = (dateB.getFullYear() - dateA.getFullYear()) * 360 +
        ((dateB.getMonth() + 1) - (dateA.getMonth() + 1)) * 30 + (dayB - dayA);

    return days;
}

function lastDayOfFebruary(date) {

    lastDay = new Date(date.getFullYear(), 2, -1);

    return date.getDate() == lastDay;
}