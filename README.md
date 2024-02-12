1. FEATURES

   1. It has different pages named as home page, three product pages and an about page.
      1.1 - The product pages are named as everything, groceries and toiletries page and in which the products are listed
      according to the name of the page.
      1.2 - Each product also has the description page which appears when we click on a product on the products page.
      1.3 - Each product page has the functionality of searching the products by their name.
   2. The cart
      2.1 - A user can add a product to the cart.
      2.2 - Can edit the quantity of items in the cart
      2.3 - The app displays the total amount of the items added in the cart.
      2.4 - The cart also has the checkout button which navigates to the form which will demand the details of the order and
      some personal details of the user.
      2.5 - When this form has been filled, the app then displays the final page showing the success messsage after performing
      the final order.
   3. Error handling - The app properly handles the different edge cases and shows the corresponding page according to it.
      3.1 - No products to display page - If the product page is loading and if the user search something which doesn't
      match any product then this page is shown.
      3.2 - 404 Not found - If the user mistakenly types the wrong url which doesn't exist on the web app then, this page is shown.
   4. Fully responsive
      The app is fully responsive and looks fine on every device whether it's mobile, tablet or laptop.

2. TECH STACK

   1. Html & CSS
   2. React js

3. How to run the app after cloning the project ?
   Terminal 1 -> npm start
   Terminal 2 -> npx json-server -p 3500 -w data/db.json
   Note : make sure to run npm i to install all the dependencies used in the project

4. How the code is implemented ?
   4.0 - I've used the fake products data which is stored in a json file.
   4.1 - For easy navigation between different pages, I've used react-router.
   4.2 - For state management I've used context api.
   4.3 - For DRY code, I've made a custom hook for fetching the products.
   4.4 - For API fetching, I've used axios.

5. Snapshot of the application

Note : Take your time to read the README file and don't forget to give this repo a star!!!
