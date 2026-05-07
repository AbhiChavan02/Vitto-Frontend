import {
  CheckCircle2,
  XCircle,
  BadgeIndianRupee,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

const DecisionCard = ({ result }) => {
  const approved =
    result.decision === 'Approved';

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div
        className={`p-8 ${
          approved
            ? 'bg-gradient-to-r from-green-500 to-emerald-600'
            : 'bg-gradient-to-r from-red-500 to-rose-600'
        }`}
      >
        <div className="flex items-center gap-4">
          {approved ? (
            <CheckCircle2
              size={60}
              className="text-white"
            />
          ) : (
            <XCircle
              size={60}
              className="text-white"
            />
          )}

          <div>
            <h2 className="text-4xl font-bold text-white">
              {result.decision}
            </h2>

            <p className="text-white/90 mt-1">
              Loan eligibility evaluation
              completed successfully
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 grid md:grid-cols-2 gap-6">
        {/* Credit Score */}
        <div className="bg-gray-50 rounded-2xl p-6 border">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-indigo-600" />

            <h3 className="text-xl font-semibold">
              Credit Score
            </h3>
          </div>

          <p className="text-5xl font-bold text-indigo-600">
            {result.creditScore}
          </p>

          <p className="text-gray-500 mt-2">
            Risk assessment score based on
            lending criteria.
          </p>
        </div>

        {/* EMI */}
        <div className="bg-gray-50 rounded-2xl p-6 border">
          <div className="flex items-center gap-3 mb-4">
            <BadgeIndianRupee className="text-green-600" />

            <h3 className="text-xl font-semibold">
              Monthly EMI
            </h3>
          </div>

          <p className="text-5xl font-bold text-green-600">
            ₹{result.monthlyEMI}
          </p>

          <p className="text-gray-500 mt-2">
            Estimated monthly repayment
            amount.
          </p>
        </div>
      </div>

      {/* Reason Codes */}
      <div className="px-8 pb-8">
        <div className="bg-gray-50 rounded-2xl border p-6">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="text-orange-500" />

            <h3 className="text-2xl font-semibold">
              Reason Codes
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {result.reasonCodes.length > 0 ? (
              result.reasonCodes.map(
                (reason, index) => (
                  <span
                    key={index}
                    className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {reason}
                  </span>
                )
              )
            ) : (
              <div className="bg-green-100 text-green-700 px-5 py-3 rounded-xl font-medium">
                No Risk Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionCard;