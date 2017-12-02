# davidbrookes.co.uk

[![build status](https://gitlab.com/dbrookes/db-homepage/badges/master/build.svg)](https://gitlab.com/dbrookes/db-homepage/commits/master)
[![coverage report](https://gitlab.com/dbrookes/db-homepage/badges/master/coverage.svg)](https://gitlab.com/dbrookes/db-homepage/commits/master)
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This site is built with Gatsby, a static PWA (Progressive Web App) generator. Gatsby exposes a data source (MarkDown in this case) and allows it to be queried with GraphQL.

Dynamic functionality such as forms are built with AWS Lambda functions exposed though AWS API Gateway - JAM stack.

## Local Development

`yarn install`

`yarn run develop`

The site is available at: `http://localhost:8080`

GraphiQL is available at: `http://localhost:8080/___graphql/`

Changes made locally to React components and styles are hot reloaded to the browser.

## User Interface

The UI is based on Alibaba's [Ant Design](https://ant.design/docs/react/introduce) React component library, An enterprise-class UI design language for web applications.

Custom components are styled with [CSS Modules](https://github.com/css-modules/css-modules).

## Linting

Both ESlint and Stylelint are available, it's recommended that you use the features of your IDE to lint as you go and follow the `eslint-config-airbnb` rule set.

To run the linters on the command line:

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

Continuous deployment is provided by GitLab running an AWS Node.JS Docker image to lint, test, build and deploy the static site to an Amazon S3 bucket, see `.gitlab-ci.yml`.

As a backup, it's also possible to build and deploy the project to S3 from AWS CodePipeline, see `buildspec.yml`.

## Contact Form

The contact form runs a Node Lambda function which fetches a HTML email template from the s3 bucket, populates it with the post data from AWS API Gateway and sends the email notification via Amazon SES.

## Deployments

Pushing code on the develop branch will run the GitLab CI pipeline and if successful, code will be deployed to the staging bucket. After deployment, changed Cloudfront files are invalidated and correct headers are set so the most recent copy of the site is pushed to each CDN edge location for optimial performance around the world.

`https://staging.davidbrookes.co.uk`
