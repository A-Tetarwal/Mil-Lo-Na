# Mil Lo Na

Mil Lo Na is a simple note-taking application that allows users to create and view notes. The notes are stored as text files on the server.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Create notes with a title and description.
- View a list of created notes.
- Read individual notes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mil-lo-na.git

2. Navigate to the project directory:   
   ```bash
   cd mil-lo-na

3. Install the dependencies:
   ```bash
   npm install
4. Create the necessary folders:
   ```bash
   mkdir public/images public/stylesheets public/javascripts files

5. (Optional) Add your own logo to the public/images directory and name it logo.svg.

## Usage

1. Start the server:
   ```bash
   node index.js
2. Open your web browser and navigate to:
   ```bash
   http://localhost:3000
3. Use the form to create new notes. The notes will be listed below the form, and you can click "Read more" to view individual notes.

## Folder StruCture

   ```php
   mil-lo-na/
├── files/                  # Folder to store notes as text files
├── node_modules/
├── public/
│   ├── images/             # Public images folder
│   ├── javascripts/        # Public JavaScript files
│   └── stylesheets/        # Public CSS files
├── views/
│   └── index.ejs           # Main view template
├── index.js                # Main server file
├── package.json
├── README.md
   ```

## Technologies Used

- Node.js
- Express
- EJS
- Tailwind CSS

## License
This project is licensed under the MIT License - see the LICENSE file for details.

   ```less
    Make sure to replace `https://github.com/yourusername/mil-lo-na.git` with the actual URL of your GitHub repository. This README file provides a comprehensive overview of your project, including installation instructions, usage, and folder structure.
   ```
