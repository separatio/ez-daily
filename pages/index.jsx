import Layout from '../components/Layout';
import ChoiceCard from '../components/ChoiceCard';

const choiceCardsData = [
  {
    id: 1,
    title: 'Roulette',
    text: 'Your team members, in Random order!',
  },
  {
    id: 2,
    title: 'As-is',
    text: 'Use a custom order for the team members!',
  },
  {
    id: 3,
    title: 'Alphabetical',
    text: 'This is self-explanatory, right?',
  },
  {
    id: 4,
    title: 'Reverse Alphabetical',
    text: 'Play the Roulette in Reverse!',
  },
];

const ChoiceCardsList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2">
      {
        choiceCardsData.map((props) => {
          return (
            <ChoiceCard
              {...props}
              key={props.id}
            />
          );
        })
      }
    </div>
  );
};

export default function Page() {
  return (
    <Layout>
      <div className="container content">
        <ChoiceCardsList />
      </div>
    </Layout>
  );
}
