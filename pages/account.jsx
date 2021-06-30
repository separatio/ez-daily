import Header from '../components/Header';

export default function Page() {
  return (
    <div
      className="page"
    >
      <Header />

      <div className="content">
        <Row className="justify-content-md-between" />
      </div>
    </div>
  );
}
