# React Navigation Exercises

A practice of React Navigation

## Organisation

### Duration

Two exercises:

- Exercise #1: 30min
- Exercise #2: 1h

Note that times are approximate and you can decide how much time you spend on each exercise

### Team

Same pairs of the previous day.

## Brief

### Exercise #1

Extend your music app to have some navigation

Requirements are:

- Use `react-router-dom`'s `Routes`, `Route` and `NavLink` &/or `Link` components to give it at least 3 routes (one of them can be "/")
- Use `react-router-dom`'s `useNavigate` hook to one of your components and implement a 'Back' button
- Add nested routes

### Exercise #2

Use React Router to build an app that lets users view colours and add new colours

#### User Stories

- As a user, I can go to /colours to see a list of all available colours
- As a user, I can click on one of the colours in my colours list and get taken to a page where I can see that colour in all its glory. (The route here should be `/colours/:colour`)
- As a user, I can click on a button to show a form that will let me add a new colour. (The route here should be `/colours/new`)
- As a user, when I submit my new colour form, I am redirected to the colours index, and my new colour appears at the top
- As a user, if I try to navigate to a colour page that does not exist (e.g. `/colours/burrito`), I am redirected to the colours index page
- As a user, if I try to navigate to an invalid url (e.g. `/this-is-not-valid`), I am redirected to the colours index page
- Your app should have some styling

## Output

### Exercise #1

Make sure to create a new branch in your music repo and push your changes from this exercise

### Exercise #2

Make sure to create a new repository for your colours app and send your repo link to the Slack channel
