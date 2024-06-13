# React Jobs Finder website

An SPA where you can see a list of different jobs, and employers can post jobs.

## Tech stack

Single page application created with vite and react in TypeScript.
Json server acts as the backend, the data comes from the jobs.json file.
React router used for navigation. Tailwind for styling, and react-toastify for toast components, react-spinners for loading, react-icons for icons

## Page

This app is not hosted online, in order to run you must:

1. Clone or download this repo
2. Go to the package.json file. The two scripts that are of interest is "dev" and "server"
3. In one terminal, run "npm run dev" or use yarn. This will run the frontend
   site on http://localhost:3000/
4. In another terminal run "npm run server". This starts the json server, which watches the jobs.json file and monitors http requests, performing CRUD operations as needed. The json server runs on http://localhost:8000/ - you can visit that url if you want to.
