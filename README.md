# CalDav Node.js

This is a **SUPER BASIC** example of a CalDav server implemented in Node.js. It is designed for learning purposes to practically show how a CalDav server can be implemented. **It is not made for production use**, only for educational use.

## Description

This project implements a very basic CalDav server using Node.js. It allows basic operations such as retrieving, updating, and deleting calendar data.

## Features

- **GET** `/caldav`: Retrieves calendar data.
- **PUT** `/caldav`: Updates or adds a new event to the calendar.
- **DELETE** `/caldav`: Deletes calendar data.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/SaidTorres3/CalDav-NodeJS.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CalDav-NodeJS
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Create a new folder called `data` in the project directory.

2. Create a new file called `calendar.ics` in the `data` folder.

3. Start the server:
    ```bash
    npm run start
    ```
4. The server will be listening on port `8008`.

5. Create a new calendar with the URL `http://localhost:8008/caldav` in a calendar client like Thunderbird. It doesn't require login.