import { useForm } from 'react-hook-form';

import { useState } from 'react';

import toast from 'react-hot-toast';

import { evaluateApplication } from '../../services/applicationService';

import DecisionCard from '../results/DecisionCard';

const LoanApplicationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response =
        await evaluateApplication({
          ...data,

          monthlyRevenue: Number(
            data.monthlyRevenue
          ),

          loanAmount: Number(
            data.loanAmount
          ),

          tenureMonths: Number(
            data.tenureMonths
          ),
        });

      setResult(response.data);

      toast.success(
        'Application evaluated successfully'
      );

      reset();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        MSME Lending Decision System
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-5"
      >
        <div>
          <input
            type="text"
            placeholder="Owner Name"
            className="w-full border p-3 rounded-xl"
            {...register('ownerName', {
              required:
                'Owner name is required',
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.ownerName?.message}
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="PAN Number"
            className="w-full border p-3 rounded-xl"
            {...register('panNumber', {
              required:
                'PAN number is required',
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.panNumber?.message}
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Business Type"
            className="w-full border p-3 rounded-xl"
            {...register('businessType', {
              required:
                'Business type is required',
            })}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Monthly Revenue"
            className="w-full border p-3 rounded-xl"
            {...register('monthlyRevenue', {
              required:
                'Monthly revenue is required',
            })}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Loan Amount"
            className="w-full border p-3 rounded-xl"
            {...register('loanAmount', {
              required:
                'Loan amount is required',
            })}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Tenure Months"
            className="w-full border p-3 rounded-xl"
            {...register('tenureMonths', {
              required:
                'Tenure is required',
            })}
          />
        </div>

        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Loan Purpose"
            className="w-full border p-3 rounded-xl"
            {...register('loanPurpose', {
              required:
                'Loan purpose is required',
            })}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition"
        >
          {loading
            ? 'Processing...'
            : 'Evaluate Application'}
        </button>
      </form>

      {result && (
        <DecisionCard result={result} />
      )}
    </div>
  );
};

export default LoanApplicationForm;