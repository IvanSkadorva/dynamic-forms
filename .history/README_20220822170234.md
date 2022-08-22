## Acre Tech Task

To run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view it in the browser.

Also you can find a deployed version here:

# Implementatino Notes

(According to the tech task description)

1. In the `bash data` folder you will find form Schema.json with the required structure. To view form data after submission, you need to open the console.
2. To add input validation I modified the json field and added this logic to the components (see Input.tsx, RadioGroup.tsx)
3. In the FormGenerator.tsx file I added a map to keep such depndencies and then I added theonChange function for the function to display channges accroding to the validation rules
   4.To solve the problem with dynamic journeys, I would create custom forms for each user based on their profile information. So the process will be as follows:

1) Collect all the necessary information about the user during the registration process
2) Send this data to the database
3) When a user opens any form, the application should make a request and ask the backend to provide a customized JSON form based on the user's responses, which are stored in the database.

# Visible improvements

There are of course a lot of things to improve in this project, such as:

1. Add Redux to make filling out and storing form data easier.
2. Add tests
3. Add additional form libraries to make them easier (For example, Formik)
4. Rewrite Field.tsx using the Builder design pattern instead of Switch.
5. Create a custom React library for all components and simply reuse them in this project.
6. Add scripts for CI/CD to run tests during the build process.
7. Fix current bugs, add types to events.

- I didn't complete this project fully because I think even this is quite enough to understand my abilities in finding some creative solutions in a short period of time.
