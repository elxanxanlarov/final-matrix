# E-Commerce React Application

This project is a feature-rich e-commerce platform built with React.js, Ant Design, React Router, and React Toastify. It supports multiple pages and functionalities, including user profiles, product listings, a shopping cart, and admin dashboards.

## Features

- **Home Page**: A landing page with an overview of the shop.
- **Shop Page**: Displays a catalog of products.
- **Product Details**: Detailed information about a specific product.
- **Wishlist**: Allows users to save their favorite products.
- **Shopping Cart**: Manages selected products for checkout.
- **Checkout**: Enables users to finalize their purchases.
- **User Authentication**: Includes login and registration functionality.
- **Profile Page**: Allows users to manage their personal information.
- **Admin Dashboard**: Accessible to admin users for product management.
- **Private Routes**: Secures access to sensitive pages.
- **FAQs and Contact Page**: Provides additional information and user support.
- **404 Page**: A custom page for undefined routes.
- **Back-to-Top Button**: Enhances user experience for lengthy pages.
- **Toast Notifications**: Delivers user feedback for actions.

## Technologies Used

- **React.js**: Framework for building user interfaces.
- **React Router**: Handles application routing.
- **Ant Design**: Provides a responsive and aesthetic UI library.
- **React Toastify**: Displays notifications.
- **CSS**: For custom styling.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/elxanxanlarov/final-matrix
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and visit `http://localhost:3000`.

### Build for Production

To create a production-ready build:
```bash
npm run build
# or
yarn build
```

The output will be available in the `build` directory.

## Project Structure

```plaintext
src/
├── components/              # Reusable components
├── layout/                  # Layout components (Header, Footer)
├── pages/                   # Application pages
│   ├── Home/                # Home page
│   ├── Shop/                # Shop page
│   ├── ProductDetails/      # Product details page
│   ├── Dashboard/           # Admin dashboard
│   ├── Wishlist/            # Wishlist page
│   ├── Cart/                # Shopping cart
│   ├── Contact/             # Contact page
│   ├── UserProfile/         # User profile, login, and register
│   └── NotFoundPage/        # 404 page
├── private-routes/          # Private route logic
├── App.js                   # Application entry point
└── index.js                 # Main file
```

## Routes

| Path                         | Component                  | Access Level     |
|------------------------------|----------------------------|------------------|
| `/`                          | Home                      | Public           |
| `/shop`                      | Shop                      | Public           |
| `/about`                     | About                     | Public           |
| `/contact`                   | Contact                   | Public           |
| `/faq`                       | FaqPage                   | Public           |
| `/products/:slug`            | ProductDetails            | Public           |
| `/wishlist`                  | Wishlist                  | Public           |
| `/addtocart`                 | Basket                    | Public           |
| `/checkout`                  | Check                     | Public           |
| `/checkout-result`           | ResultCheck               | Public           |
| `/login`                     | Login                     | Public           |
| `/register`                  | Register                  | Public           |
| `/profile`                   | Profile                   | Private (User)   |
| `/admin`                     | Admin                     | Private (Admin)  |
| `/dashboard`                 | Dashboard                 | Private (Admin)  |
| `/dashboard/addproduct`      | DashboardAdd              | Private (Admin)  |
| `/dashboard/editproduct/:slug` | DashboardEdit           | Private (Admin)  |
| `*`                          | NotFoundPage              | Public           |

## Author

Developed by [Elkhan Khanlarov](https://github.com/elxanxanlarov).


