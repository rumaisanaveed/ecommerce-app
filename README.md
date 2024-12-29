# 🛒 Organic Ecommerce Store (Ecommerce Web App)

## 📝 Introduction  
This is a feature-rich e-commerce web app and also my very first React project which I started to build after learning React from a Youtube channel. The app includes various pages for products, a functional cart, error handling, and a checkout system. It is fully responsive and provides a seamless user experience across all devices.  

## 🛠️ Tech Stack  
- **HTML & CSS**: For structure and styling as I didn't have any idea about Tailwind CSS at that time. 
- **React.js**: Because I learned this and wanted to implement React in some project.  

## ✨ Features  

### 🌐 Pages  
1. **Home Page, Product Pages, and About Page**:  
   - Product pages include:  
     - Everything  
     - Groceries  
     - Toiletries  
   - Products are listed based on the page's category.  

2. **Product Description Page**:  
   - Displays detailed information about a product when clicked on a product listing.  

3. **Search Functionality**:  
   - Search products by name on each product page.  

### 🛒 The Cart  
1. Add products to the cart.  
2. Edit the quantity of items in the cart.  
3. Displays the total amount for items in the cart.  
4. Includes a checkout button that navigates to an order form.  
5. On form submission, displays a success message on the final order page.  

### ❌ Error Handling  
1. **No Products to Display**:  
   - Shown when the product page loads, and the user searches for an unavailable product.  
2. **404 Not Found**:  
   - Shown when the user types an invalid URL.  

### 📱 Fully Responsive  
The app looks great on all devices, whether mobile, tablet, or desktop.  

---

## 📚 What did I learn
I learned alot btw and also faced many challenges along the way because as a beginner in react I started to build this ecommerce store (You can think how difficult it was for me). Well, I learned alot from each and every challenge which I faced along my way and I enjoyed the process as well. 
1. **Fake Product Data**:  
   - Stored in a JSON file for a simple, mock database.  

2. **React Router**:  
   - Enables smooth navigation between different pages.  

3. **Context API**:  
   - Used for state management.  

4. **Custom Hook**:  
   - Created to fetch product data for maintaining DRY (Don't Repeat Yourself) code.  

5. **Axios**:  
   - Used for API requests.  

---

## 🚀 Running the App  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/rumaisanaveed/ecommerce-app.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd ecommerce-app  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  
4. Start the development server:  
   **Terminal 1**:  
   ```bash  
   npm start  
   ```  
   **Terminal 2**:  
   ```bash  
   npx json-server -p 3500 -w data/db.json  
   ```  
---

⭐ **Note**: Take your time to explore the app at https://organic-ecommerce-store.netlify.app/, and don't forget to give this repo a star!  
