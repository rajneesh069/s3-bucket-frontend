## This repo's build contents will be uploaded in Amazon S3 bucket.

This React project contains routed apps namely : Counter and Todo Generator.

It is aimed at showcasing that why S3 is a better option for frontend over EC2, as the frontends requested by users are the same hence CDNs (after cahing it ofcourse) could deliver them very fast and provide a seamless experience and thats the reason why backends aren't distributed using CDNs (but EDGE networks could be used for that, they don't do caching) as each time the data which is requested from a backend by a user is user specific, hence caching it won't solve the problem. EDGE networks basically mean putting the data centers/servers near the user's location to make the backend communication because of less distance.

`Since static files or SPA can be served properly through CDNs, i.e., HTML/CSS/JS or React (as it gets  converted eventually to HTML + CSS + JS only) hence for frameworks with the support of SSR (server side rendering, like Next.js), this is NOT a good idea.`

To start the project locally, run the following commands :

```bash
npm install ## to install the dependencies

npm run dev ## to start the frontend server locally
```

To build the project, run the following command :

```bash
npm run build ## to build the project locally
```

Install the serve package using the following command and serve the built HTML, CSS and JS files locally :

```bash
npm i serve -g ## to install the serve package globally on your machine

cd dist/ ## navigate to the dist folder

serve ## run the serve command to serve the static site or SPA
```
