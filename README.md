# Giftastic!

## Live Link
 - https://luckytiger18.github.io/giftastic.io/

## Requirements

1. Create a page with buttons that will generate 12 gifs from the GIPHY API
2. The current animated state of the gif should be toggled by clicking on the gif to either still or animate 
3. A small input field should allow a user to submit a topic which will generate a new button 

## Technologies Used

- AJAX for API GET requests
- GIPHY API 
- Jquery for Dom Manipulation
- Google Fonts 

## Code Explained
- I tried to keep my code clean. I declared my variables at the top which consists of a function and an array.
- Below the declared variables are three event listeners 
	1. One listens for clicks on the topic buttons
	2. One listens to clicks on the submit button
- At the bottom of the page a call to a function creates the initial buttons on the page from an array that is prefilled with "topics" of my own choosing. 

-------------

## What I gained:

- I learned about the AJAX "GET" method and pulling data from an API. 
- I also learned about the specific way to create an event listener on a dynamically created object, which initially gave me some problems. 
- I also learned how to create css grids.   
