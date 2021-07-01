import Layout from '../components/Layout';
import ChoiceCard from '../components/ChoiceCard';

export default function Page() {
  return (
    <Layout>
      <div className="container content">
        <div className="row row-cols-1 row-cols-md-2">
          <ChoiceCard
            title='Roulette'
            text='Your team members, in Random order!'
          />

          <ChoiceCard
            title='As-is'
            text='Use a custom order for the team members!'
          />

          <ChoiceCard
            title='Alphabetical'
            text='This is self-explanatory, right?'
          />

          <ChoiceCard
            title='Reverse Alphabetical'
            text='Play the Roulette in Reverse!'
          />
        </div>
      </div>
    </Layout>
  );
}
