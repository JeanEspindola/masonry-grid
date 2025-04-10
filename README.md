# Masonry Grid Application!

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### API_KEY

Please add a ``.env`` file to the root of the code base. You can use the ``.env.example`` as guidance.
In the environment file add your own API Key:

```
API_KEY="API_KEY_HERE"
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Development Notes

I opted for using the new React Router v7 starter project as having the routes with RR was mandatory. Even after continuously working with Remix, handling RR7 (a.k.a Remix v3) brought me some challenges as the API is a bit different and configuring a new project always has its complications.
With RR7 heavily going to the server, I went for ServerSide rendering for both list and detail route. That means the whole data fetching happens on the server and to the client side we serve a built HTML.

### Decisions

Some tools, libraries, techniques I picked for this task:

- Tailwind: the whole project is styled with Tailwind. A very much lighter styling solution.
- Vitest/Testing Library: Runner and library used for handling unit tests for the project.
- MockService Worker (MSW): Used to mock all API calls in order to not reach the real API for unit tests.
- Lazy loading images: each image is only loaded to the browser once it is scrolled into the viewport.
- Error boundary per route and root file.
- RemixUtils - for having useDebouncedSubmit and delaying the keystrokes of the search input.

### Streaming

I actually implemented the detail route deferring the promise and using Await/Suspense to render a fallback page while the date was still being loaded.
I did this in order to demonstrate how implementations like this project could be improved.

### Fetching on scroll
Since no library should have been used to build the masonry-grid, I used the IntersectionObserver API in order to achieve/identify the end of the page and trigger another request.

### Not implemented / Issues
- Not being able to use third party library was a real challenge here. I tried to implement the virtualization by myself but due to lack of time (sometimes even reaching PEXELS API daily limit), this request was not done.
- A shouldRevalidate function can be implemented on each route to avoid reloading/re-fetching data on each route back/forward navigation.
- There are some duplication issues, while loading and fetching more data. I am not really sure if this is an issue in my implementation or if the next page is in fact brining some duplicated items.
- There might be some ``too many requests`` issue when scrolling the page really fast. I am not sure about this yet, it is not consistent but I have added a better error message for the detailed route

### Improvements - TBD
- Prettier and linting. I did not add due the timing constraints.

### Testing
There are two commands for checking the implemented unit tests.

```bash
npm run test
```
and
```bash
npm run coverage
```

### Performance
- I checked the performance using Lighthouse. Got 100% in accessibility and 86% overall.
- The results were bad at LCP, which basically had a huge influnce of not implementing the list virtualization. Also if I had streamed the list route, I believe this result would have been improved.

### Bonus
I implemented a debounced search input. The challenge here was to handle two different APIs as curated should be used for generic listing and search for querying the data base. Also some of the unit tests started to failed.
I used the same approach with Remix and did not have the error in my tests. Another challenge of new RR7 API in comparison to Remix.

### Final comments
This was definitely the most difficult but the most fun challenge I ever had. Really enjoyed working on it and will for sure enhance or add missing things later.