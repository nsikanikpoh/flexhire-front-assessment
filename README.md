# Full Stack React/React-Relay Front-end and  Rails API and Postgresql Database Back-end.

## To start up  the backend server 
- First goto into the /backend directory.<br />
- Update the `database.yml` file in app/config directory with your database credentials and run `bundle install` <br />
- Run database migration `rails db:migrate`<br />
- Seed the database `rails db:seed`<br />
- start up the server `rails server`<br />
- It is expected that the rails server will run on port 3000.<br />

- I have already created a webhook on flexhire with the following details <br />
```
{
    "data": {
        "createWebhook": {
            "clientMutationId": "b1ce42c845b5558a0a256fgfg",
            "webhook": {
                "authenticationHeaderName": null,
                "authenticationHeaderValue": null,
                "enabled": true,
                "id": "d2ViaG9va3MtOQ==",
                "url": "http://localhost:3000/flexhire-callback"
            },
            "errors": []
        }
    }
} 
```


### To run Spec
- Run database migration `rails db:migrate RAILS_ENV=test`<br />
- Run test `bundle exec rspec --format documentation`<br />

### To startup the front-end 
- First run `npm install` and `npm start`. Please run react development server on port 3001.<br />

## To Simulate Webhook event
- Click on <b>Simulate Webhook Event</b> button in the user skills area. This simulate an update event with a - payload that contains record parameter with user ID and profile ID. The frontend refeshes the profile - fragment and also refeshes the user skills fragment with react transition to visualize the effect.

## to run the Cypress test 
- Run `npm run e2e` <br />
- This opens up cypress and you can choose to run the component tests or the integration test.<br />

### If you have any question you can ask on Flexhire Chat. I look forward to hearing from you. Thanks!

