# ARSP CMS

CMS for Anti-Racist Starter Pack (ARSP), powered by Strapi. Admin login is at https://arsp-cms.herokuapp.com/admin.

## Development

1. Install dependencies: `npm install`
2. Pull the latest postgres image: `docker-compose pull`
3. Run postgres: `docker-compose up`
4. Then run `npm run develop` (may need to run it a few times due to timeouts, etc., before it will run)

## Deployment

1. Log into Heroku: `heroku login`
2. Deploy: `git push heroku main`
3. To open project, run `heroku open`

Full Heroku deployment instructions: https://strapi.io/documentation/v3.x/deployment/heroku.html
