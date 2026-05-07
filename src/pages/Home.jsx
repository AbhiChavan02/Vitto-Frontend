import LoanApplicationForm from '../components/forms/LoanApplicationForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <LoanApplicationForm />
      </div>
    </div>
  );
};

export default Home;