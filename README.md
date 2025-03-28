# Speedrun Hackathon Template

A degit template for the Vite-React community to kickstart your hackathon projects quickly with a preconfigured setup using Vite, React, Tailwind CSS, Flowbite React, and more.

## Features

- **Vite-powered** development for fast hot module replacement.
- **React 19** with latest features.
- **Tailwind CSS** integration for rapid styling.
- **Flowbite React** components with a post-install patch.
- **TypeScript** support and ESLint configured for code quality.
- **React Hook Form** and **React Router** for robust form handling and routing.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation via degit

You can quickly clone the template using degit. Run the following command in your terminal:

```bash
npx degit fronrich/speedrun-hackathon-template#main my-project
```

This command will clone the `main` branch of the repository into a new folder called `my-project`.

### Setup

1. **Navigate to your project directory:**

   ```bash
   cd my-project
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   This will start the Vite development server. Open your browser and navigate to the displayed URL (usually [http://localhost:3000](http://localhost:3000)).

### Scripts

- **`npm run dev`**: Starts the development server using Vite.
- **`npm run build`**: Builds the project for production. It runs TypeScript build followed by the Vite build.
- **`npm run preview`**: Serves the production build locally for preview.
- **`npm run lint`**: Lints your codebase using ESLint.
- **`postinstall`**: Automatically applies the Flowbite React patch after installation.

## Project Structure

A brief overview of the project structure:

```sh
my-project/
├── node_modules/           # Project dependencies
├── public/                 # Static files
├── src/                    # Application source code
│   ├── components/         # React components
│   ├── styles/             # Tailwind CSS and custom styles
│   └── App.jsx             # Main application component
├── package.json            # Project metadata and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements. Make sure to follow the coding conventions and run the linter before submitting changes.

## License

This project is licensed as per the terms provided in the repository.

---

Happy hacking and enjoy building with the Speedrun Hackathon Template!

If you encounter any issues or have further questions, feel free to reach out or open an issue on [GitHub](https://github.com/fronrich/speedrun-hackathon-template).
