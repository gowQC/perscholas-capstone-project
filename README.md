# Perscholas Capstone Project

For my Per Scholas Capstone project, I have created a full stack application that will simulate the likes of an e-commerce website. Listed here is a monolithic repository containing both the frontend and backend folder structures for my project. My e-commerce website simulations user account creation and allows for logged in users to place items in their virtual cart and push orders to be sent back to the database. Listed below are more in-depth explanations for both the frontend and backend portions of this project.

## Frontend

### Home Page

This is the landing page for my project. The first thing users will see is a nav bar that will be utilized amongst almost all the other important pages. This nav bar will not only provide all the necessary links for site traversal, but it will also prompt the user to either sign up or log in; if a user is already logged in, such a prompt is replaced by different options: a link to the user's profile, a link to the user's cart/checkout page, and a clickable text that signs the user out if clicked. The profile page and cart page will be elaborated later on.

Also found on the home page is not only a promotional image for the winter season, but also a small queue of "featured" items (also based on the season). A number of items are listed as seasonal items, and those that match the current season will be displayed as the first products to catch the user's eyes.

### Authorization Page

The authorization page is where a user can choose to sign up or log in. Sign up functionality allows the user to create an account and post that information to a database, where the password is encrypted. Log in functionality allows for users to log in while retaining the encryption of their password.

### Shirts, Pants, Footware, and Seasonal Pages

These pages query products from the backend for their respective cloathing categories and display them to the user. The user will be able to see what products are available, what sizes are currently in stock and out of stock, and what products are completely out of stock in all size ranges. If a user is logged in, the user can click a button for an item to proceed with a dialogue box, which will then prompt them further to add a number of sizes to their cart for the selected product. This dialogue will allow the user to only select a number of sizes available for that product - so if a shirt has 3 XXL sizes left, a user can only order 3 of that size for that shirt. If a user is not logged in, said button will respond with a different dialogue that states only signed in users can access the cart functionality.

### Checkout Page

When a user is satisfied with the items they've added to their cart, they can enter the checkout page to confirm a purchase. All the items and requested sizes will be visible on checkout, along with a form that will prompt them for shipping and credit card information (none of which is checked for strictly due to security reasons - allowing for fake data). Once the form is filled properly, users can then choose to remove items from their cart before their simulated transaction occurs. Removing an item from the list will rerender a new total price listed at the bottom. Once the form is filled out and a user is content with their cart, they can submit their order, which will then save the details of that order to the database.

### User Profile Page

More implementations will be made here at some point, but for now the user is capable of deleting their account. It's a simple click of the button that prompts users if they're sure they wish to proceed. If confirmed, the user's account will be terminated.

### Miscellaneous Pages

There are also extra pages found in the footer of the home page linking to pages for "About Us", "Contact", "Careers", and "Privacy Notice." These pages are still under development, but they don't serve any purpose to the functionality of this project, as they are only there for aesthetic purposes only.

## Backend

### Index.mjs File

This file hosts a standard Express server that is hosted locally on port 5052 when no .env file is present. The two main data types/models for this backend are for "products" and "users."

### Models

Product documents contain the following data:

- a string representing the name of the product
- a string representing the description of the product
- a string representing the category of the product, which can be only 1 of 4 choices from "shirts", "pants", "footware", and "seasonal"
- 6 different number fields, each representing a size from "XS", "S", "M", "L", "XL", "XXL"
- a number representing the total stock of all sizes combined
- a number representing the product's price
- a string containing the image URL
- a boolean representing if an item is being promoted or not

User documents contain the following data:

- a string representing a user's first name
- a string representing a user's last name
- a string representing a user's email address
- a string representing a user's password
- a cart field that has the value of an object that stores the number of sizes ordered for each individual product
- an address info field that has the value of an object that stores data relating to the user's home address information
- a payment info field that has the value of an object that stores data relating to the user's payment information
- an orders field that has the value of an object that uses dates as keys, which are paired with the items ordered from the cart object

### Routes

The following routes can be used to perform certain HTTP actions in the backend:

- http://localhost:5050/api/products/

  - GET method retrieves all of the product documents found in the database

- http://localhost:5050/api/users/

  - POST method allows for the user to create an account and save it to the database with an encrypted password

- http://localhost:5050/api/users/login

  - POST method allows for the user to log into an already existing account from the database using both an email and password

- http://localhost:5050/api/users/:id

  - GET method allows for a user to retrieve the current contents of their cart
  - PUT method allows the user to modify the contents of the cart field
  - DELETE method allows for the user to delete their entire account

- http://localhost:5050/api/users/ORDER/:id

  - PUT method allows for a user to clear the cart field while also appending data to their addressInfo, paymentInfo, and orders fields
