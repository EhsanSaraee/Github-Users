import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';
import mockUser from './mockData.js/mockUser';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
   const [user, setUser] = useState(mockUser);
   const [repos, setRepos] = useState(mockRepos);
   const [followers, setFollowers] = useState(mockFollowers);

   const [requests, setRequests] = useState(0);
   const [loading, setLoading] = useState(false);
   // Check Rate
   const checkRequests = async () => {
      try {
         const { data } = await axios.get(`${rootUrl}/rate_limit`);
         let {
            rate: { remaining },
         } = data;
         setRequests(remaining);
         if (remaining === 0) {
            // throw an error
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      checkRequests();
   }, []);

   return (
      <GithubContext.Provider value={{ user, repos, followers, requests }}>
         {children}
      </GithubContext.Provider>
   );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
