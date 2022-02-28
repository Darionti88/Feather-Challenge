# Feather - Fullstack Engineer code challenge

Notes before starting.

You might see my last PR is called "Revert Docker Attempt". The DB i used was Planetscale (Mysql) with Prisma as ORM. Is a rather new stack so there is still not good documentation on how to set up Docker Compose with it. I gave it a try and I got pretty close, but it was not fully working so I removed it. I'm still getting my head around Docker.

This means that, in order to make this project run you will need to download de enviromental variables [here](https://docs.google.com/document/d/1-9_rAyhGFRkGMkjSRaeyip33X7yVdHtlURtCtMNgA8A/edit) and paste it in a .env file inside [backend](./backend) folder.

Once that is done follow the next steps:

1. On the [backend](./backend) folder:

Install the dependencies:

```bash
yarn install
```

And run the development server:

```bash
yarn dev
```
2. On the [frontend](./frontend) folder:
 
Install the dependencies:

```bash
yarn install
```

And run the development server:

```bash
yarn dev
```

3. On the [backend](./backend) folder you also need to do the following:

Generate Prisma Client:

```bash
npx prisma generate
```

And start Prisma Studio to peek the DB:

```bash
npx prisma studio
```

Once inside the Project you can Sign Up a new user or login with the following credentials:

email: feather@feather.com

password: feather

## Known Issues:
Not really proud of this, but the JWT for auth it's being stored in Local Storage. I tried to set a cookie based Auth but for some reason it was not working. You might see breadcrumbs of my attempt but those are signs for me to, if we get to do the feedback, ask you some questions that will help me understand better.

There are other bugs going on but we can discover them while going through it.

It was defintely the most challenging challenge I have ever done. I have never used graphql before and did very little unit testing. I'm pretty satisfied of what came up in a few hours after work over the last week. 


