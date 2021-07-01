import Layout from '../components/Layout';

export default function Page() {
  return (
    <Layout>
      <div className="container content">
        <div className="row justify-content-md-between">
          <a href="http://localhost:3000">
            <div className="sml-card">
              <div className='card-body'>
                <div className='card-title'>
                    Roulette
                </div>

                <div className='card-text'>
                        Your team members, in Random order!
                </div>
              </div>
            </div>
          </a>

          <a href="http://localhost:3000">
            <div className="sml-card">
              <div className='card-body'>
                <div className='card-title'>
                    As-is
                </div>

                <div className='card-text'>
                        Use a custom order for the team members!
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="row justify-content-md-between">
          <a href="http://localhost:3000">
            <div className="sml-card">
              <div className='card-body'>
                <div className='card-title'>
                    Alphabetical
                </div>

                <div className='card-text'>
                        This is self-explanatory, right?
                </div>
              </div>
            </div>
          </a>

          <a href="http://localhost:3000">
            <div className="sml-card">
              <div className='card-body'>
                <div className='card-title'>
                    Reverse Alphabetical
                </div>

                <div className='card-text'>
                        Play the Roulette in Reverse!
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
