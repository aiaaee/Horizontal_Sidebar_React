# Horizontal Sidebar React

that our code is more optimized and neatly structured within the project. Additionally, we styled our JSX code using `Bootstrap` , one of the most popular frameworks for React.

![HorizontalSidebar1](https://github.com/user-attachments/assets/0f8d5ff2-ee46-409b-a8b8-c617b3e79e84)

After designing the website, we want to use contexts to access states and functions globally across all components of the project. To achieve this, we will create an AppContext and place it in a file named `Context.js` .

### Context in React : 
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

![HorizontalSidebar2](https://github.com/user-attachments/assets/cd635f73-4bb1-4264-bf42-3b60e7bffacc)

import AppContext : 
```
const AppContext = React.createContext() ;

```
then we need to write AppProvider to Provide React Context for transform datas.

```
const AppProvider =({children}) => {
    return <AppContext.Provider value={{openSidebar , closeSidebar , isOpenSidebar}} >{children}</AppContext.Provider>
}
```


Next, we will utilize the relevant states in our functions to manage the opening and closing of the sidebar. Finally, we will use all the functions defined in Context.js throughout various parts of the project.

```
export const useGlobalContext = () => {
    return useContext(AppContext)
}
```

I hope you find this useful. The project code can be found in the [source] section.
