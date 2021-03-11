# Let's Have a Drink

A full-stack single application that allows users to search for cocktail recipes by name or by the ingredients that they have. Recipes are fetched from a third party cocktail database API.

https://lets-have-a-drink.herokuapp.com/

## Technologies Used
* HTML
* CSS
* Javascript
* Node/Express
* React
* Material-UI

## Learning Opportunities During Development

When creating the feature allowing users to search for cocktail recipes by the ingredients they had, I found that the third party API would only return the drinks names and ID. This then required me to fetch each recipe individually from the cocktail DB one by one. This lead to increased loading times. I was able to use `Promise.all()` in order to more synchronously fetch the data, greatly reducing loading times.

## Approach

Before beginng the application, a simple wireframe was drawn to plan out a simple UI for users to easily search for cocktail recipes.
