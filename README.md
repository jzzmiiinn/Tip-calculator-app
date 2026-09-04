# Tip Calculator App

A responsive tip calculator built as a Frontend Mentor challenge using HTML, Tailwind CSS, and TypeScript.

The application allows users to calculate the tip amount and total bill per person based on the bill amount, selected tip percentage, and number of people.

## Features

* Calculate tip amount per person
* Calculate total amount per person
* Choose from preset tip percentages:

  * 5%
  * 10%
  * 15%
  * 25%
  * 50%
* Enter a custom tip percentage
* Validate required inputs
* Display error messages for invalid values
* Reset all inputs and calculation results
* Responsive design for mobile and desktop screens
* Calculate the result when the form is submitted
* Interactive input states and selected tip styles

## Built With

* HTML5
* TypeScript
* Tailwind CSS
* Vite

## How It Works

The calculator uses the following formulas:

### Tip Amount

```text
Tip Amount = Bill × (Tip Percentage / 100)
```

### Tip Per Person

```text
Tip Per Person = Tip Amount / Number of People
```

### Total Bill

```text
Total Bill = Bill + Tip Amount
```

### Total Per Person

```text
Total Per Person = Total Bill / Number of People
```

## Validation

The application validates:

* Bill amount must be greater than zero.
* Number of people must be greater than zero.
* A preset or custom tip percentage must be selected.

Error messages are displayed when invalid or incomplete information is submitted.

## Project Structure

```text
tip-calculator-app/
│
├── public/
│   ├── icon-dollar.svg
│   ├── icon-person.svg
│   ├── logo.svg
│   └── ...
│
├── src/
│   ├── main.ts
│   └── style.css
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone (https://github.com/jzzmiiinn/Tip-calculator-app)
```

Navigate into the project:

```bash
cd tip-calculator-app
```

Install the dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local development URL provided by Vite in your browser.

### Build for Production

```bash
npm run build
```

## Learning Goals

This project helped me practice:

* TypeScript DOM manipulation
* TypeScript type assertions
* HTML form handling
* Form submission events
* Input and change events
* Working with radio buttons
* Reading and updating input values
* Conditional logic
* Input validation
* Error handling
* Dynamic class manipulation
* Responsive layouts with Tailwind CSS
* CSS utility classes and responsive breakpoints
* Structuring a small frontend application

## Responsive Design

The application is designed to work across different screen sizes.

On smaller screens, the calculator sections are displayed vertically.

On larger screens, the input form and results section are displayed side by side.


## Frontend Mentor

This project is based on the **Tip Calculator App** challenge from Frontend Mentor.

The challenge was used to practice building a responsive interface from a provided design and implementing the required functionality with TypeScript.

## Author

**Yasmin Ali**

## License

This project was created for learning and practice purposes.
