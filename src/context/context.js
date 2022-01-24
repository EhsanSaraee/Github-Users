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
   // requests & loading
   const [requests, setRequests] = useState(0);
   const [loading, setLoading] = useState(false);
   // error
   const [error, setError] = useState({ show: false, message: '' });

   const searchGithubUser = async (user) => {
      toggleError();
      try {
         const response = await axios.get(`${rootUrl}/users/${user}`);
         if (response) {
            setUser(response.data);
         } else {
            toggleError(true, 'there is no user with this username');
         }
      } catch (error) {
         console.log(error);
      }
   };
   // Check Rate
   const checkRequests = async () => {
      try {
         const { data } = await axios.get(`${rootUrl}/rate_limit`);
         let {
            rate: { remaining },
         } = data;
         setRequests(remaining);
         if (remaining === 0) {
            toggleError(true, 'sorry, you have exceeded hourly rate limit!');
         }
      } catch (error) {
         console.log(error);
      }
   };

   const toggleError = (show = false, message = '') =>
      setError({ show, message });

   useEffect(() => {
      checkRequests();
   }, []);

   return (
      <GithubContext.Provider
         value={{ user, repos, followers, requests, error, searchGithubUser }}
      >
         {children}
      </GithubContext.Provider>
   );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
