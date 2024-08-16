# Project 3: The War For Middle Earth Simulator
## Ver 0.1.0

[The One Ring](https://upload.wikimedia.org/wikipedia/commons/transcoded/5/50/The_one_ring.ogg/The_one_ring.ogg.mp3)

> **[Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk, agh burzum-ishi krimpatul](https://youtu.be/u8si0lokhj0?t=26)**


>`One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them`

> ***J.R.R. Tolkien, The Lord of the Rings, The Fellowship of the Ring, "The Council of Elrond", pp. 252-3***

It is time for the battle to decide the fate of the Middle Earth.

The project is an extension of the kata: ***[Good vs Evil](https://shorturl.at/EVtDo) by [Frzy](https://www.codewars.com/users/Frzy)***

## General Idea

We will generate good and evil armies, face them in environments to  get a winner

The winner will be blessed by **Eru Ilúvatar** themself.

As in the original kata we will have worths assigned to each race, but we will extend the races and add more properties that will allow us to get more complex battles

Extended races:
* Men are now:
    * Lesser men
    * Dúnedain
    * Pirates
* Ents

Added properties:
* Blessing =  A numeric value that will add to the power of a race
* Worth = the numeric value that is actually calculated on the battle

We start by asking our user for some data that we will use for randomnizing the scenarios, we will provide the values the user selects from the available options.

* Age (1st age - 4th age, time before the first ages are not taken into account as some races might not exist by that time)
* Location
* Active Ainu Blessing for the battle

We must return the date of the battle and a recap of the battle

## What does the script do:

1. Presents the battle options for the user to choose
1. Generates a battle object
1. Randomly Generates armies based on the scenario proposed by the user
1. Calculates the actual battle numbers
1. Returns a winner (Good or Evil)


