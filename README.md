# soul-card

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Soul card was developed with Soul identity provider.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsoul-project%2Fcard&env=NEXTAUTH_URL,NEXTAUTH_SECRET,SOUL_PLATFORM_ID&envDescription=Env%20variables%20needed%20for%20NextAuth%20to%20work%20properly.%20You%20may%20set%20NEXTAUTH_URL%20to%20http%3A%2F%2Flocalhost%3A3000%20if%20your%20app%20deployment%20url%20is%20not%20known%20yet.&envLink=https%3A%2F%2Fnext-auth.js.org%2Fconfiguration%2Foptions%23environment-variables)

## Running locally

1. Create an account on Soul by visiting https://login.soul-network.com/register
2. Login through https://www.soul-network.com/ using your new account and retrieve the access token
3. Create a new platform using your account (please replace the placeholders with your desired values)

```shell
$ curl --location --request POST 'https://api.soul-network.com/v1/platforms' \
  --header 'Authorization: Bearer <AUTH_TOKEN>' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "name": "<PLATFORM_NAME>",
      "redirect_uris": ["<VALID_CALLBACK_URL>"]
  }'
```

4. Information about your platform will be returned, including a unique identifier represented by
   the `id` field

5. Make a copy of `.env.development` and call it `.env.development.local`, `SOUL_PLATFORM_ID` should be
   set to the `id` you've obtained on the step above

6. Run the application!

```shell
$ nvm use
$ npm -g install npm@8

$ npm run dev
```
