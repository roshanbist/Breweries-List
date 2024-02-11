# Breweries App

This project has been developed using React and TypeScript. The primary goal of this project is to practice how to fetch, display, and search for data from the given API endpoints.

## Custom Hooks

This application uses axios to fetch data from Open Brewery DB and this application has three customized fetch hooks:

1. `useFetch`
   This hook returns the array of brewery company each with their related properties. I have used this data to map the entire list of brewery company in UI Company page.

2. `useFetchDetails`
   This hook returns object of individual brewery company. I have used to hook to show entire data of an individual company when user navigate to company detail page through the individual button implemented in company page.

3. `useFetchName`
   This hook returns the array of brewery company that matched with the string searched by the user in the home page search field. It map all the matched brewery company in search result page and if the string do not match then a message "No matching result found" will be displayed in the UI.

### Routes

Latest React Router is used for the routing purpose where there are 3 main Navigating pages Home, Companies, and Contact, and two related sub-pages namely SearchResult and CompanyDetail.

## Tailwind CSS

Tailwind CSS has been used for styling the UI of this application.

## Home page

This is the default page of the application. The user interface include the menu items with banner with good search form where user can search the brewery company.

## Contact form

To develop the contact form in this project react-hook-form is used. Even though it was my first time using the react-hook-form i find it convenient to develop with the help of related document and examples.

## Brewery Company Details page

Detail page simply include the detail description of that brewery company that user will navigate to. It include the detail information such as name, address of city, street, country and even the related website of company which can be navigated through the related button in the page.

## Few Words from Developer

It was great to develop this project, even though the features and layout seem simple. However, I have learned a lot through this project, especially TypeScript and React features.

## Deploy

This App is deployed ----> ([click here](https://brewerycompany.vercel.app/))
