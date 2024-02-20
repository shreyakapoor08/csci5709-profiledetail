# Tutorial 4

* *Date Created*: 19 FEB 2024
* *Last Modification Date*: 19 FEB 2024
* *Tutorial URL*: <https://git.cs.dal.ca/shreyak/csci-5709-tutorials/-/tree/main/tutorial4?ref_type=heads>
* *Deployed URL*: <https://csci5709-profiledetail.netlify.app/>


## Authors

* [Shreya Kapoor](sh820878@dal.ca)

## Deployment

I made a clone of the front-end project on github and then imported it on netlify. Then, I configured the build and deployment settings to deploy the app. After all the testcases are passed, my application was deployed on the link mentioned.
https://csci5709-profiledetail.netlify.app/
Steps to navigate to the pages
1. Enter the test login credentials given in the assignment (page 1)
2. Redirected to the profile listing page (page 2)
3. Click on any profile and redirect to the profile detail page (page 3)

## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Dependency Management

## Sources Used

1. I referred https://mui.com/material-ui/getting-started/ to brush up my concepts of material ui.
2. I have referred to the following code snippet from https://medium.com/@glasshost/how-to-filter-an-array-of-objects-in-react-51efa11ee49 
```
const handleFilter = (event) => {
  const value = event.target.value;
  const filtered = users.filter(user => user.name.includes(value));
  setFilteredUsers(filtered);
};
```

and applied it in ProfileListingPage.js line 31 - 34
```
const filteredUsers = users.filter(user => {
    const fullName = user.name.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });
  ```

- The code was used to have an understanding on how the search filterworks
 
- I used the code because I wanted to implement the search functionality based on the names.
 
- I made necessary modification in the code as per the requirement of this project.

## Acknowledgments

I would like to express my gratitude to the creators and contributors of the websites which I referred in this project. Their work has provided valuable insights and served as a foundation for my understanding and learning.
