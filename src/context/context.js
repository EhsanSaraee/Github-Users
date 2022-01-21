import { createContext, useContext, useState } from 'react';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';
import mockUser from './mockData.js/mockUser';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
   const [user, setUser] = useState(mockUser);
   const [repos, setRepos] = useState(mockRepos);
   const [followers, setFollowers] = useState(mockFollowers);

   return (
      <GithubContext.Provider value={{ user, repos, followers }}>
         {children}
      </GithubContext.Provider>
   );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
