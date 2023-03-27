# 'Countries of the World' ReactApp 

Project work for React Advanced classes at Helsinki Business College, 2023.

This is a single page app written in JavaScript using React Redux and the !(REST countries)[https://restcountries.com/] and !(Open Weather Map)[https://openweathermap.org/] APIS.

## Additional libraries and dependencies

React-Bootstrap with additional custom CSS is used for component styling. 
React-hook-form is used to simplify the handling of login forms.
An API key is required for data fetching from Open Weather Map. This should be stored in an .env file at the project root, as follows:
```REACT_APP_OPENWEATHERMAP_API_KEY: <your key>```

The dotenv library is included as a dependency in package.json.

Axios should also be installed for fetches from the weather api.

This project uses RTK Query from redux toolkit for data fetches from the REST countries API. (No additional packages needed.)

### Image Acknowledgements:

Unsplash Photography Credits:

* Martine Jacobsen, Alan J. Hendry,Jakub Dziubak, Damian Hutter, K. Mitch Hodge, Sanjay Hona, Steven Wei, David Monaghan, Conor Samuel, Marek Okon, Ruslan Bardash, Ariel Nathan, Joshua Oluwagbemiga, Sid Verma,  Shomitro Kumar Ghosh, Ebadur Rehman Kaium,  Yura Lytkin,  Pedro Lastra, Andrey Grinkevich, Kristaps Grundsteins, Erik Karits *
