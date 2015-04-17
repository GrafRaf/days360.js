# days360.js
days360 excel function for js

## Function description from support.office.com
[source](https://support.office.com/en-us/article/DAYS360-function-c80baf88-68b5-464e-ad63-2215912eca43?CTT=3&CorrelationId=d71015c7-2053-4bea-999e-be08d503fb3c&ui=en-US&rs=en-US&ad=US)

###DAYS360 function
This article describes the formula syntax and usage of the **DAYS360** function in Microsoft Office Excel.

####Description

The DAYS360 function returns the number of days between two dates based on a 360-day year (twelve 30-day months), which is used in some accounting calculations. Use this function to help compute payments if your accounting system is based on twelve 30-day months.

####Syntax

DAYS360(start_date, end_date, [method])

The DAYS360 function syntax has the following arguments:

* **start_date**, **end_date**    Required. The two dates between which you want to know the number of days. 
If start_date occurs after **end_date**, the **DAYS360** function returns a negative number. 
Dates should be entered by using the **DATE** function, or derived from the results of other formulas or functions. 
For example, use **DATE(2008,5,23)** to return the 23rd day of May, 2008. Problems can occur if dates are entered as text.
For more information, see [Change the date system, format, or two-digit year interpretation.](https://support.office.com/en-us/article/Change-the-date-system-format-or-twodigit-year-interpretation-aaa2159b-4ae8-4651-8bce-d4707bc9fb9f)

* **method**    Optional. A logical value that specifies whether to use the U.S. or European method in the calculation.

|Method            | Defined                                                                                                                                                                                                                                                                                                                                                                          |
|----------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|FALSE or omitted  | U.S. (NASD) method. If the starting date is the last day of a month, it becomes equal to the 30th day of the same month. If the ending date is the last day of a month and the starting date is earlier than the 30th day of a month, the ending date becomes equal to the 1st day of the next month; otherwise the ending date becomes equal to the 30th day of the same month. |
|TRUE              | European method. Starting dates and ending dates that occur on the 31st day of a month become equal to the 30th day of the same month.                                                                                                                                                                                                                                           |


*NOTE* Excel stores dates as sequential serial numbers so that they can be used in calculations. By default, January 1, 1900 is serial number 1, and January 1, 2008 is serial number 39448 because it is 39,447 days after January 1, 1900. Microsoft Excel for the Macintosh uses a different date system as its default.
For more information, see [Change the date system, format, or two-digit year interpretation.](https://support.office.com/en-us/article/Change-the-date-system-format-or-twodigit-year-interpretation-aaa2159b-4ae8-4651-8bce-d4707bc9fb9f)


