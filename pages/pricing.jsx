import styles from '../style/Pricing.module.css';
import {Container, Button} from 'react-bootstrap';
import Layout from '../components/Layout';

const cardsData = [
  {
    id: 1,
    type: styles.basic,
    title: 'Basic Plan',
    price: 9.99,
    button: styles.btnbasic,
    features: ['2TB Storage', '200 E-mails', '10 Accounts'],
  },
  {
    id: 2,
    type: styles.medium,
    title: 'Medium Plan',
    price: 19.99,
    button: styles.btnmedium,
    features: ['10TB Storage', '500 E-mails', '20 Accounts'],
  },
  {
    id: 3,
    type: styles.pro,
    title: 'Pro Plan',
    price: 29.99,
    button: styles.btnpro,
    features: ['100TB Storage', '5000 E-mails', '50 Accounts'],
  },
];

const ListItem = (props) => {
  const {
    index,
    value,
  } = props;
  return <li key={index}>{value}</li>;
};

const CardFeatures = ({features}) => {
  const listItems = features.map((item, index) =>
    <ListItem key={index} value={item} />,
  );

  return (
    <ul className="list-unstyled mt-3 mb-4">
      {listItems}
    </ul>
  );
};

const PricingCardAction = ({button}) => {
  return (
    <Button variant="primary" className={`w-100 btn btn-lg ${button}`}>
    Get Started
    </Button>
  );
};

const PricingCardBody = (props) => {
  const {
    features,
    price,
    button,
  } = props;

  return (
    <div className="card-body">
      <h1 className="card-title pricing-card-title">${price} <small className="text-muted">/ mo</small></h1>
      <CardFeatures features={features}/>
      <PricingCardAction button={button}/>
    </div>
  );
};

const PricingCardHeader = ({title}) => {
  return (
    <div className="card-header">
      <h4 className="my-0 fw-normal">{title}</h4>
    </div>
  );
};

const PricingCard = (props) => {
  const {
    type,
    title,
  } = props;

  return (
    <div className="col">
      <div className={`mb-4 shadow-sm ${type}`}>
        <PricingCardHeader title={title} />
        <PricingCardBody {...props}/>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (

    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      {
        cardsData.map((props) => {
          return (
            <PricingCard
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
      <Container fluid className="page">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Pricing</h1>
          <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <Pricing />
        {/* <PricingCard />

          <div className="col">
            <div className={`mb-4 shadow-sm ${styles.card, styles.medium}`}>
              <div className="card-header">
                <h4 className="my-0 fw-normal">Medium</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                <CardFeatures features={['asd']}/>
                <button type="button" className={`w-100 btn btn-lg btn-primary ${styles.btnmedium}`}>Get started</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={`mb-4 shadow-sm ${styles.card, styles.pro}`}>
              <div className="card-header">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                <CardFeatures features={['asd']}/>
                <button type="button" className={`w-100 btn btn-lg btn-primary ${styles.btnpro}`}>Get started</button>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </Container>
    </Layout>
  );
}
