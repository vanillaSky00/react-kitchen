<div align="center">

# 📚 Afterword

<div align="center">

Built with ☕ and too many books to remember.

</div>

**A minimal, personal bookshelf companion — track what you read, remember why it mattered.**

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)

<br/>

<img src="assets/img/logo_dark.png" alt="Shelfwise Logo" width="200"/>

</div>


## About

**Shelfwise** is a clean, cross-platform mobile app for keeping a personal record of every book you've read or want to read. Sign up, log in, and start building your own digital bookshelf — complete with titles, authors, and descriptions. Data syncs in real-time across devices via Appwrite, so your library is always up to date.

No social features, no recommendations algorithm, no noise. Just you and your books.


## Features

- 🔐 **Secure Authentication** — Email/password registration and login powered by Appwrite
- 📖 **Personal Bookshelf** — Add books with title, author, and description
- ⚡ **Real-Time Sync** — Changes reflect instantly across sessions and devices via Appwrite subscriptions
- 🗑️ **Book Management** — View details and remove books from your collection
- 🌗 **Dark & Light Mode** — Automatic theming based on system preference
- 🔒 **Per-User Permissions** — Each user can only access their own books
- 🧭 **Expo Router Navigation** — File-based routing with auth guards (GuestOnly / UserOnly)


## Tech Stack

| Layer          | Technology                                                        |
| -------------- | ----------------------------------------------------------------- |
| Framework      | [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/) |
| Routing        | [Expo Router](https://docs.expo.dev/router/introduction/)         |
| Backend        | [Appwrite Cloud](https://appwrite.io/)                            |
| Auth           | Appwrite Account Service                                          |
| Database       | Appwrite Databases (with real-time subscriptions)                 |
| State          | React Context API + custom hooks                                  |
| Language       | JavaScript (JSX)                                                  |


## Project Structure

```
.
├── app/
│   ├── (auth)/              # Auth screens (login, register) — guest only
│   ├── (dashboard)/         # Protected screens — logged-in users only
│   │   ├── books/[id].jsx   # Book detail / single book view
│   │   ├── books.jsx        # Full reading list
│   │   ├── create.jsx       # Add a new book
│   │   └── profile.jsx      # User profile & logout
│   ├── _layout.jsx          # Root layout with providers
│   └── index.jsx            # Landing / home screen
├── components/              # Reusable themed UI components
│   └── auth/                # Auth guard wrappers (GuestOnly, UserOnly)
├── constants/               # Color tokens & theme config
├── context/                 # React Context providers (User, Books)
├── hooks/                   # Custom hooks (useUser, useBooks)
├── lib/                     # Appwrite client configuration
└── assets/                  # Icons, splash, logos
```


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- An [Appwrite](https://appwrite.io/) project with:
  - **Authentication** enabled (email/password)
  - A **Database** with a `books` collection containing fields: `title`, `author`, `description`, `userId`

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/shelfwise.git
cd shelfwise

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Configuration

Update `lib/appwrite.js` with your own Appwrite credentials:

```js
client
  .setEndpoint('https://<YOUR_APPWRITE_ENDPOINT>/v1')
  .setProject('<YOUR_PROJECT_ID>')
  .setPlatform('<YOUR_PLATFORM>')
```


## Screenshots

> _Add your own screenshots here — light mode, dark mode, book list, create screen._