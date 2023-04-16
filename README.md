# React TypeScript App with SWAPI API Integration ⚛

This is a sample React application built using TypeScript that integrates with the [Star Wars API (SWAPI)](https://swapi.dev/). The app is designed to consume the APIs and deal with responses, as well as manage routing and implement the UI itself.

## Features 🔮

* **TypeScript** : The app is built using TypeScript, which offers static type checking, improved code maintainability, and better editor support.
* **SWAPI API Integration** : The app integrates with the SWAPI API to fetch data related to the Star Wars universe.
* **Routing** : The app uses the `react-router-dom` package to implement client-side routing and display different components based on the URL path.
* **UI Components** : The app includes various UI components, such as buttons, carousel, and cards, that are designed to follow the Material Design principles.
* **Redux:**  The app integrates `redux-redux` for global state management for things such as loading, setting lists and errors.

## Prerequisites 🧰

Before running the app, you need to have the following installed on your machine:

* Node.js v12 or later
* npm v6 or later

## Installation 🚀

To install the app, follow these steps:

1. Clone the repository:
   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/lukepas/star-wars-fe.git
   cd star-wars-fe
   </code></div></div></pre>
2. Install the dependencies:
   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm install
   </code></div></div></pre>

## Running the App ⚙

To start the app, run the following command:

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm start
</code></div></div></pre>

This will start the development server and open the app in your default browser.

## Usage 🔭

The app allows you to navigate through sidebar and mobile navigation. Allows you to select prefered film which shows the list of characters in that selected film name/gender/birth year/mass
