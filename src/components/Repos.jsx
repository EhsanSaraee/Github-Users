import styled from 'styled-components';
import { useGithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D, Chart } from './Charts';

const Repos = () => {
   const { repos } = useGithubContext();
   console.log(repos);
   const chartData = [
      {
         label: 'HTML',
         value: '30',
      },
      {
         label: 'CSS',
         value: '50',
      },
      {
         label: 'JavaScript',
         value: '60',
      },
      {
         label: 'React.js',
         value: '80',
      },
   ];

   return (
      <section className="section">
         <Wrapper className="section-center">
            <Pie3D data={chartData} />
         </Wrapper>
      </section>
   );
};

const Wrapper = styled.div`
   display: grid;
   justify-items: center;
   gap: 2rem;
   @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
   }

   @media (min-width: 1200px) {
      grid-template-columns: 2fr 3fr;
   }

   div {
      width: 100% !important;
   }
   .fusioncharts-container {
      width: 100% !important;
   }
   svg {
      width: 100% !important;
      border-radius: var(--radius) !important;
   }
`;

export default Repos;
