import { createContext, useContext } from 'react';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
   return (
      <GithubContext.Provider value="hello">{children}</GithubContext.Provider>
   );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
