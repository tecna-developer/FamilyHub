# FamilyHub — the full roadmap

The point is not to study React apart from practice, but to build one real family app a
piece at a time.

## 0. Project setup

**Study:** SPA, React, Vite, npm, Git.

**Practice:** create a Vite project, set up ESLint, create a Git repository and make the first commit.

**Result:** an empty project, but a tidily configured one.

## 1. JSX and components

**Study:** JSX, components, props, the shape of `src`.

**Practice:** assemble the main page from `Header`, `Greeting`, `Card`, `WeatherCard`, `WaterCard` and `MoodCard`.

**Result:** a static dashboard made of small components.

## 2. useState

**Study:** state and event handlers.

**Practice:** add a `+250 ml` button to the water tracker and an emoji mood picker.

**Result:** the interface responds to what the user does.

## 3. Lists and map()

**Study:** `map()`, `key`, conditional rendering.

**Practice:** show the shopping list and the family task list.

**Result:** an array turns into cards and list rows.

## 4. Forms

**Study:** controlled fields, `onChange`, `onSubmit`, basic validation.

**Practice:** forms for adding a shopping item and a task.

**Result:** the user can add data of their own.

## 5. useEffect

**Study:** `useEffect`, dependencies, the component lifecycle.

**Practice:** a greeting that follows the time of day, and today's date.

**Result:** the screen refreshes whatever depends on time by itself.

## 6. LocalStorage

**Study:** writing and reading JSON in the browser.

**Practice:** keep water, mood, shopping and tasks across a reload.

**Result:** personal data survives closing the page.

## 7. React Router

**Study:** routes, links, nested pages.

**Practice:** build the Dashboard, Water, Mood, Shopping and Settings pages.

**Result:** the app becomes a multi-page SPA.

## 8. Context API

**Study:** context, Provider, `useContext`.

**Practice:** shared settings — the user's name and a light/dark theme.

**Result:** settings reach every component without passing props through many levels.

## 9. Custom hooks

**Study:** the rules of hooks and pulling repeated logic out.

**Practice:** write `useLocalStorage`, `useGreeting` and `useToday`.

**Result:** components get shorter and easier to read.

## 10. UI components

**Study:** composition and reuse.

**Practice:** build one shared `Button`, `Card`, `Modal`, `ProgressBar`, `Input` and `Badge`.

**Result:** the interface looks like one thing, and changes take less work.

## 11. Responsive CSS

**Study:** Flexbox, Grid, media queries, CSS Modules or whichever styling approach I settle on.

**Practice:** lay the dashboard out for desktop, tablet and phone; add unobtrusive animation.

**Result:** FamilyHub is comfortable on any device.

## 12. Working with an API

**Study:** `fetch`, `async/await`, loading and error handling.

**Practice:** show the weather, a quote of the day and a random recipe.

**Result:** the app uses data from outside itself.

## 13. Performance

**Study:** `React.memo`, `useMemo`, `useCallback` — and when they are actually needed.

**Practice:** test a long shopping list and remove the renders that serve nothing.

**Result:** performance handled deliberately rather than by reflex.

## 14. Supabase

**Study:** authentication, the database, synchronisation.

**Practice:** add sign-in and keep the family's data in the cloud.

**Result:** FamilyHub works across several devices.

## 15. PWA

**Study:** manifest, service worker, offline mode.

**Practice:** make the app installable on a phone.

**Result:** FamilyHub feels like a real mobile app.

## 16. Refactoring

**Practice:** split the large components, remove duplication, improve names, bring the code to one style.

**Result:** a clean project worth showing in a portfolio.
