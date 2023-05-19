# Full Stack React/React-Relay Front-end and  Rails API and Postgresql Database Back-end.

## To start up  the backend server 
First goto into the /backend directory.\n
Update the `database.yml` file in app/config directory and run `bundle install` \n
Run database migration `rails db:migrate`
Seed the database `rails db:seed`
start up the server `rails server`
It is expected that the rails server will run on port 3000.

I have already created a webhook on flexhire with the following details 
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
Run database migration `rails db:migrate RAILS_ENV=test`
Run test `bundle exec rspec --format documentation`

### To startup the front-end 
First run `npm install` and `npm start`. Please run react-server on a different port than 3000.

## To Simulate Webhook event
Click on Simulate Webhook Event button in the user skills area. This simulate an update event with a payload that contains record parameter with user ID and profile ID. The frontend refeshes the profile fragment and also simulates refeshing the user skills fragment.

## to run the Cypress test 
Run `npm run e2e` \n
This opens up cypress and you can choose to run the component tests or the integration test.

### If you have any question you can ask on Flexhire Chat. I look forward to hearing from you. Thanks!

