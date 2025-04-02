React + TypeScript + Vite

This project provides a minimal setup to get React working with Vite, TypeScript, and Bootstrap.

Available Scripts

In the project directory, you can run:

npm run dev

Runs the app in the development mode.
Open http://localhost:5173 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

Project Overview

This project consists of four primary components:

1. Input Component

Captures and validates user input.

Ensures that only numeric values are accepted.

If a non-numeric value is entered:

Adds is-invalid class to the input.

Displays an error message.

Includes a "Reset" button that clears the input and removes validation errors.

Emits the valid number to other components.

2. Multiply Component

Receives the numeric value emitted by the InputComponent.

If the value is not a number, the component does not render.

Multiplies the received value by 2 (n \* 2) and displays it.

3. Pow Component

Receives the numeric value emitted by the InputComponent.

If the value is not a number, the component does not render.

Raises the received value to the power of itself (n^n) and displays it.

4. Date Component

Receives the numeric value emitted by the InputComponent.

If the value is not a number, the component does not render.

Converts the received value to a date using Unix timestamp (value \* 1000).

Displays the date in the format YYYY/MM/DD HH:MM.

Installation

1. Clone the repository:

git clone <repository-url>
cd <project-directory>

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

Technologies Used

React

TypeScript

Vite

Bootstrap

Project Structure

/src
├── components
│ ├── InputComponent.tsx
│ ├── MultiplyComponent.tsx
│ ├── PowComponent.tsx
│ ├── DateComponent.tsx
├── App.tsx
├── main.tsx
├── index.css

License

This project is licensed under the MIT License.

Feel free to contribute by improving components or optimizing the logic! 🚀
