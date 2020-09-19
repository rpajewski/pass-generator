# Password Generator Project

## A Webpage used to generate randomized secure passwords

I used javascript to created seperate arrays containing possible characters that the user could choose from to use in their password. Those arrays are chosen by the user via prompts then a generate password function is ran. 

The generate password function uses a Math.random variable to randomly select a character out of a called character array.

If statements are used within the generate password function to determine whether the password criteria came back true. If the criteria for any specific character comes back true the function will add that characters array to a possibleChar array then use the Math.random function to pick one character to be added to the final password (or the genResults array). 

Once all possible character types have been added to the possibleChar array and one of each character type has been chosen at random and added to the chosenChar array the function will determine the length of the password based on the users input and generated random characters from the possibleChar array using a for loop and adding it to the genResults array.

Lastly the generate password function will add the characters added to the genResults array and the chosenChar array creating our final password. 

## Deployment Link:
https://rpajewski.github.io/pass-generator/

## Deployment Screenshot:
![Screen Shot 2020-09-19 at 1 37 35 PM](https://user-images.githubusercontent.com/70237837/93686679-6f193380-fa7d-11ea-8569-df851469550e.png)