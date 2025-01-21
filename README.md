# Perscholas Capstone Project

For my Per Scholas Capstone project, I have created a full stack application that will simulate the likes of an e-commerce website. Listed here is a monolithic repository containing both the frontend and backend folder structures for my project. My e-commerce website simulations user account creation and allows for logged in users to place items in their virtual cart and push orders to be sent back to the database. Listed below are more in-depth explanations for both the frontend and backend portions of this project.

## Frontend

### Home Page

This is the landing page for my project. The first thing users will see is a nav bar that will be utilized amongst almost all the other important pages. This nav bar will not only provide all the necessary links for site traversal, but it will also prompt the user to either sign up or log in; if a user is already logged in, such a prompt is replaced by different options: a link to the user's profile, a link to the user's cart, and a clickable text that signs the user out if clicked. The profile page and cart page will be elaborated later on.

Also found on the home page is not only a promotional image for the winter season, but also a small queue of "featured" items (also based on the season). A number of items are listed as seasonal items, and those that match the current season will be displayed as the first products to catch the user's eyes.

### Authorization Page

The authorization page is where a user can choose to sign up or log in. Sign up functionality allows the user to create an account and post that information to a database, where the password is encrypted. Log in functionality allows for users to log in while retaining the encryption of the password.

### Shirts, Pants, Footware, and Seasonal Pages

These pages query for their respective cloathing categories and display them to the user. The user will be able to see what products are available, what sizes are currently in stock and out of stock, and what products are completely out of stock in all size ranges. If a user is logged in, the user can click a button for an item to proceed with a dialogue box, which will then prompt them further to add a number of sizes to their cart for the selected product. If a user is not found, said button will simply respond to the user saying only signed in users can access the cart functionality.
