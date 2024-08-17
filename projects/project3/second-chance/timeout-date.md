# Project 3 recovery attempt
### version 0.9.0

> *(untested for all possible values)**


> ["Where Time is but a Loop,
A Loose Stitch
in the Universal Cloth,
A Streamer might Seize
upon a Chance, a Fatal slip –
And plunge the Fate
of Planets into Chaos..."
―Moebius](https://static.wikia.nocookie.net/legacyofkain/images/5/57/VOICE27.XA-4-.oga/revision/latest?cb=20181227192421)

## What to do:

The second chance project needs to use setTimeOut and the Date object

## What does it actually do:

1. Asks the user to input 1 - 10 minutes (prompt input), performs data validation on the input.
1. Shows the current time in console and stores it.
1. Passes the minutes given by the user as milliseconds to a function.
1. The previous function:
    * passes the seconds to setTimeOut()
    * logs in the console the expected complete time at which the setTimeOut function will be executed.
1. After the time is completed the function executed by setTimeOut() will:
    * start a loop that will log to the console, the amount of minutes as a # symbol the 'minutes' times, Example, 10 minutes::
```
            #
            ##
            ###
            ####
            #####
            ######
            #######
            ########
            #########
            ##########
```


