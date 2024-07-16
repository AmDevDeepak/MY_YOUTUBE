## Introduction
This web application integrates with the YouTube API to display popular videos, implement a search functionality, and provide a video details page with dummy live chat and comments.
## Structure 
- Head
- Body
  - Sidebar
    - MenuItems
  - MainContainer
    - ButtonList
    - VideoContainer
      - VideoCard   

## APIs
- Youtube's popular results's api will is used to display video cards on the main page.
 ## `The main page has infinite scrolling functionality too.`
- I've used youtube search API in order to implement searching functionality.
- The search api will be more optimized by doing :

   ```
        useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(youtubeSearchAPI + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);
  };
   ```
    `Debouncing the search`

    -  If a key is pressed on the search. The component will be rendered and useEffect will be called. Api will be called after 200 ms.
    - When the another key is pressed on the search. The component will be rendered and useEffect will be called again. And for this 2nd key the timer is a fresh one.
    -  If we press another key even before 200ms the component will be destroyed and call return method of useEffect which will clear the timeout.
    - A new time will be created and suppose even after 200ms, no key is pressed then it will make an API call for the query.
    - So basically, In conclusion, we are saving our api calls if the user types very fast on the search bar.

  `Caching for the search results (More Optimizations) : `
  
  We need to implement good caching in order to avoid bad API calls. If we store our search results in an array, then the time complexity of search in array is : `0 (n)` .
  So if we store our results like : 
  ```
  [i, ip, iphp, iphone];
  ```
  then for finding iphone, it will take (0)n.

  ----------------------------------------------------------------
  Time complexity for search in object is : `0 (1)`, which is better than array. So we can use this.
  So we will be creating a slice in our redux store for this caching task and will try to optimize the search even more.

  ## `So now, the 'search' is using live API, DEBOUNCING and CACHING`

## Watch page
  We have a watch page in the app where a video can we watched. We are using `iframe` tag for that.


## Comments 
We will add `DUMMY` comments on the watch page but the special thing is that each comment can have it's own set of replies which are again an comment at the end of the day and we will be displaying n-level nested commments.

## Dummy Live Chat
  ### Challenges : 
  - Getting Data Live
    *We will be using API Polling*
  - Updating the UI
    *We will update the UI in optimized way, so that the live chats won't make our page crash or lag. We will be using redux for the whole optimized implimentation.*
  
 - A dummy live chat has been implemented successfully.