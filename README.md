# E-Commerce PWA UI

## Overview

The E-Commerce PWA UI is a progressive web application built with React and Tailwind CSS, designed to provide an enhanced shopping experience with offline capabilities. The application includes components for displaying products, managing a shopping cart, handling user interactions, and ensuring a seamless user experience even without an internet connection.

### Deployed Link

[https://ecommerce-pwa-ui.vercel.app/](https://ecommerce-pwa-ui.vercel.app/)

### Repository Link

[https://github.com/Durgesh2601/ecommerce-pwa-ui](https://github.com/Durgesh2601/ecommerce-pwa-ui)

## Features

- **Product List**: Displays a list of available products fetched from an API, with a loader for better UX.
- **Product Card**: Component to display individual product details.
- **Shopping Cart**: Functionality to add, remove, and manage items in the cart.
- **Responsive Design**: Ensures the application works well on both desktop and mobile devices.
- **Drawer Navigation**: Responsive navigation menu with a cart icon that opens a drawer on smaller screens.
- **Offline Capabilities**: Implemented service workers to enable offline functionality and meet PWA standards.
- **Image Shimmer Effect**: Custom image component that shows a shimmer effect until the image loads.
- **Notification System**: Informs users of actions such as item removal from the cart.
- **State Management**: Uses Redux for state management.
- **Header Component**: Displays a consistent header on each page for navigation and branding.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **Redux**: State management library for JavaScript applications.
- **PWA**: Progressive Web App implementation for offline capabilities and enhanced performance.
- **Vercel**: Platform for deploying the application.
- **Fake Store API**: Open API for fetching product data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Durgesh2601/ecommerce-pwa-ui.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- **src/components/CustomImage/CustomImage.jsx**: Custom image component with shimmer effect.
- **src/components/Drawer/Drawer.jsx**: Drawer component for responsive navigation.
- **src/components/Header/Header.jsx**: Header component for displaying navigation and branding.
- **src/components/Loader/Loader.jsx**: Loader component for displaying loading state.
- **src/components/NavigationMenu/NavigationMenu.jsx**: Navigation menu with responsive drawer.
- **src/components/Notification/Notification.jsx**: Notification component for user actions.
- **src/components/ProductCard/ProductCard.jsx**: Product card component for displaying product details.
- **src/components/ProductList/ProductList.jsx**: Component to fetch and display list of products.
- **src/redux/cartSlice.js**: Redux slice for cart state management.
- **src/utils.js**: Utility functions used across the application.
- **public/manifest.json**: PWA manifest file.
- **public/service-worker.js**: Service worker file for offline capabilities.

## Usage

1. **View Products**: Visit the home page to browse available products.
2. **Manage Cart**: Add products to the cart, view the cart, and remove items.
3. **Responsive Navigation**: Use the navigation menu, which adapts to different screen sizes.

## API

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data. The following endpoints are utilized:

- **GET /products**: Fetches a list of all products.

## Code Formatting and Linting

This project uses Prettier and ESLint to ensure code consistency and quality. Additionally, Husky and lint-staged are used to automatically format and lint code before commits.

### Setting Up

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Install Husky**:

   ```bash
   npx husky install
   ```

### Configuration

- **Prettier**: Configuration is located in `.prettierrc`.
- **ESLint**: Configuration is located in `.eslintrc.js`.
- **Husky**: Pre-commit hook is set up to run lint-staged.
- **lint-staged**: Configured in `package.json` to format and lint staged files.

### Running Formatters and Linters

You can manually run Prettier and ESLint using the following commands:

- **Prettier**: `npx prettier --write .`
- **ESLint**: `npx eslint --fix .`

On each commit, Husky will automatically run lint-staged, which in turn runs Prettier and ESLint on staged files.

For more information, see the [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Husky](https://typicode.github.io/husky/#/), and [lint-staged](https://github.com/okonet/lint-staged) documentation.

## Development

- **Component-Based**: Built using reusable components for modularity and maintainability.
- **State Management**: Utilizes Redux for centralized state management.
- **Responsive Design**: Ensures a seamless experience on both desktop and mobile devices.
- **PWA Standards**: Implements service workers and manifest for offline capabilities and better performance.

## Deployment

The application is deployed on Vercel. Access it through the following link:

[https://ecommerce-pwa-ui.vercel.app/](https://ecommerce-pwa-ui.vercel.app/)

---

**Author**: Durgesh Kumar Singh\
**Contact**: dk829445@gmail.com

For any inquiries or feedback, please reach out via email.