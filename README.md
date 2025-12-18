# Lumina Estates

A modern, clean property listing platform inspired by premium real estate aesthetics. Lumina Estates offers a seamless browsing experience for discovering properties, managing favorites, and exploring detailed listings. The application is built with a focus on a sleek user interface and a robust frontend architecture.

## Features

*   **Comprehensive Property Listings:** Browse through a diverse range of properties with high-quality images and detailed descriptions.
*   **Detailed Property Views:** Access in-depth information for each property, including specifications, agent details, and multiple photos.
*   **Favorites Management:** Users can mark properties as favorites, which are persisted locally, allowing for easy access to preferred listings.
*   **Intuitive Navigation:** A user-friendly interface with clear navigation to different sections like Featured properties, Services, About Us, Agents, Contact, FAQ, Help, Legal, and Privacy.
*   **Dynamic Data Loading:** Property data is loaded from a simulated YAML source, demonstrating flexibility in data handling.
*   **Responsive Design:** Built with Tailwind CSS for a mobile-first, responsive user experience.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static types to the language.
*   **React Router:** For declarative routing in the application.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly styling the application.
*   **js-yaml:** A YAML parser used for loading property data.
*   **Vite:** A fast build tool that provides an excellent developer experience.
*   **Bun:** (Inferred from `bun.lock`) A fast, all-in-one JavaScript runtime.

## Installation

To get Lumina Estates up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/lumina-estates.git
    cd lumina-estates
    ```

2.  **Install dependencies:**
    Using Bun:
    ```bash
    bun install
    ```
    Or using npm:
    ```bash
    npm install
    ```

3.  **Start the development server:**
    Using Bun:
    ```bash
    bun run dev
    ```
    Or using npm:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

*   Navigate through property listings on the homepage.
*   Click on a property card to view its detailed information.
*   Use the heart icon to add or remove properties from your favorites.
*   Explore different sections of the website using the navigation bar.


