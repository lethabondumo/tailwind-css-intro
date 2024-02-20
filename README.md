# TailwindCSS Intro

## What

This is a TailwindCSS intro created by Niamh Doyle. Also covered is an intro to daisyUI, Material UI Icons and Pravatar avatars. Links to all these are below.

## Today's objective

- Have fun
- De-scarify CSS libraries
- Demonstrate how painless and easy it is to use Tailwind/Daisy/Icon libraries
- Demonstrate how it can supercharge development of your projects
- Have fun!
- Oh, and also learn a little.

## What we will be doing today

- This is purly styling tutorial. You won't be writing any JavaScript/React. All the React code has already been written for you.
- We will be designing a card with text and icons and adding styling to the card, buttons and page
- I have gone with a person for this tutorial, but you are free to make a card for a pet or a place, etc. Feel free to use the Pravatar images or choose one of your own

## Branches

There are 3 branches.

You can find out what branch you are currently on by entering in the terminal:

```
git branch
```

The currently-viewed branched with be marked with an asterix (\*).

Switch to a different branch by entering:

```
git checkout <name of branch>
```

### Branch "main"

Branch "main" contains our starting point for today

![starter image](/imgs/starter.png)

### Branch "final"

Branch "final" contains one possible goal state

(You can also have a peek at the final code on [GitHub](https://github.com/niamh-d/tailwind-css-intro/tree/final/src) if you get stuck during the tutorial.)

![final image](/imgs/final.png)

### Branch "setup"

Branch "setup" has the Tailwind/Daisy/Material setup code but nothing else, so you can use it as a jumping off point for your own future projects, should you wish.

![setup image](/imgs/setup.png)

## Let's get started!

This project has been set up so there is no need to run any commands other than:

Install packages:

```
npm i
```

The index.html file takes its styles from ./src/output.css, so running the below will ensure that the output.css file is always up-to-date with changes to your CSS. Leave this terminal running (don't kill it!) If at any point it dies or you need to restart, just run the below line again.

```
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```

In a separate terminal:

```
npm run dev
```

## Steps

## Branches

1. Look at starter code on main (three main components – app, form, card; app has a reducer function to manage state updates)
2. Checkout final branch
3. Switch back to main
4. Create branch "starter" to save start state (but don't checkout; stay on main)

## Page/layout styling

5. Uncomment code in index.css
6. Apply a data theme (of your choice) in index.html

## Buttons

7. Open form
8. Style buttons to your preference
9. Notice basic input validation
10. Notice conditional button disabling
11. (Optional) Alter style of input elements

## Name

12. Update name by submitting data via form

## Photo

13. Click button to randomise starting avatar
14. Choose a person or animal or place, etc. for card.

## Card

15. Apply margins, paddings, flex, flex gaps
16. Apply text typographic styling
17. Add icons
18. Add badges

## Resources for today:

Material Icons we will use today (feel free to use the ones you prefer!)

- [Icons](https://mui.com/material-ui/material-icons/)

daisyUI themeing and components (button, badge):

- [Themes](https://daisyui.com/docs/themes/)
- [Colors](https://daisyui.com/docs/colors/)
- [Inputs](https://daisyui.com/components/input/)
- [Buttons](https://daisyui.com/components/button/)
- [Badges](https://daisyui.com/components/badge/)

TailwindCSS utility classes (feel free to explore during the tutorial to find the necessary class name)

- [Flex](https://tailwindcss.com/docs/flex)
- [Gap](https://tailwindcss.com/docs/gap)
- [Grid](https://tailwindcss.com/docs/grid-template-columns)
- [Spacing](https://tailwindcss.com/docs/padding)
- [Typography](https://tailwindcss.com/docs/font-family)
- [Effects](https://tailwindcss.com/docs/box-shadow)
- [Borders](https://tailwindcss.com/docs/border-radius)

Pravatar:

- [Avatars](https://pravatar.cc/images)

(You can also have a peek at the final code on [GitHub](https://github.com/niamh-d/tailwind-css-intro/tree/final/src) if you get stuck during the tutorial.)

## Links and resources for further reading (for AFTER the tutorial, if interested)

### Tailwind CSS

A utility-first CSS framework.

- [Homepage](https://tailwindcss.com/)
- [Installation and doumentation](https://tailwindcss.com/docs/installation)

### DaisyUI

DaisyUI is a component class name library built on top of Tailwind CSS.

- [Homepage](https://daisyui.com/)
- [Installation](https://daisyui.com/docs/install/)

### Material UI

Material UI is an open-source React component library that implements Google's Material Design. The library comes with icons that are versatile and easy to use.

- [Homepage](https://mui.com/material-ui/getting-started/)
- [Installation](https://mui.com/material-ui/getting-started/installation/)

### Pravatar:

Contains avatars perfect for using in practice projects / when developing.

- [Pravatar](https://pravatar.cc/)
