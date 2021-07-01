import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout>
      <div className="container content">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-4">
            <div className="sml-card">
              <div className='card-body'>
                <h5 className='card-title'>
                    Roulette
                </h5>
                <div className='card-text'>
                        Your team members, in Random order!
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="sml-card">
              <div className='card-body'>
                <h5 className='card-title'>
                    As-is
                </h5>
                <div className='card-text'>
                        Use a custom order for the team members!
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="sml-card">
              <div className='card-body'>
                <h5 className='card-title'>
                    Alphabetical
                </h5>
                <div className='card-text'>
                        This is self-explanatory, right?
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="sml-card">
              <div className='card-body'>
                <h5 className='card-title'>
                    Reverse Alphabetical
                </h5>

                <div className='card-text'>
                        Play the Roulette in Reverse!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
