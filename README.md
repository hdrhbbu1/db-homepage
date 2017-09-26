# davidbrookes.co.uk

[![build status](https://gitlab.com/dbrookes/db-homepage/badges/master/build.svg)](https://gitlab.com/dbrookes/db-homepage/commits/master)
[![coverage report](https://gitlab.com/dbrookes/db-homepage/badges/master/coverage.svg)](https://gitlab.com/dbrookes/db-homepage/commits/master)
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This site is built with Gatsby, a static PWA (Progressive Web App) generator. Gatsby exposes a data source (MarkDown in this case) and allows it to be queried with GraphQL.

Any dynamic areas such as forms are then built with AWS Lambda functions.

## Local Development

`yarn install`

`gatsby serve`

The site is available at: `http://localhost:8000`

GraphiQL is available at: `http://localhost:8000/___graphql/`

Any changes made locally will be hot reloaded to the browser.

## User Interface

The UI is based on Alibaba's [Ant Design](https://ant.design/docs/react/introduce) React component library, An enterprise-class UI design language for web applications.

Custom components are styled with [CSS Modules](https://github.com/css-modules/css-modules).

## Linting

Both ESlint and Stylelint are available, in order form them to work they need to be installed globally on your machine. 
It's recommended that you use the features of your IDE to lint as you go.

To run the linter manually:

`yarn run lint`

`yarn run lint:js`

`yarn run lint:css`

`yarn run lint:fix`

## Testing

Testing is powered by Jest and Air BnB's Enzyme test toolkit.

`yarn run test`

Code coverage can be checked with: 

`yarn run test:coverage`

## Continuous Deployment

Continuous deployment is provided by GitLab running a lightweight Alpine Linux Node.JS Docker container to lint, test, build and deploy the static site to an Amazon S3 bucket.

As a backup, it's also possible to build and deploy the project to S3 from AWS CodePipeline.

## Contact Form

- Lambda function
- API gateway

## Deployments

Pushing code on the develop branch will cause the GitLab CI pipeline to run and if successful, code will be deployed on the staging bucket. After deployment, changed Cloudfront files are invalidated so the most recent copy of the site is pushed to each CDN edge location for optimial performance.

`https://staging.davidbrookes.co.uk`

## To Do

- Offline support, enable Service Worker with correct Cloudfront cache configuration
