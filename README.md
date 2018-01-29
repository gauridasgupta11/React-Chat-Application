This is a simple react chat application with flexbox page layout. It's completely client-side.
All the data is fake JSON inside the ChatApp component.

- Download/Clone the repository

- To start the application, run:
//You might need to use sudo 

```
npm install

npm start
```

- You can access it in a browser at http://localhost:8000 after you have followed the steps.

1. Enter any username at the login page and click on submit. A chat page will open up.
2. Left sidebar shows a list of users. Users with green icon are online and users with red icon are offline.
3. When you click on a user, the chat related to that user opens up.
4. You can add your own message here by entering it in the text-box and clicking the enter button on the keyboard.

- Testing

Run these commands to run the test:
//You might need to use sudo 
```
npm install -g karma-cli
npm test
```
Test available in the following file:
    src/test/test.js
