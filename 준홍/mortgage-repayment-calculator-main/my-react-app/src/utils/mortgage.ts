import { resultPaymentProps } from "../types/type";

interface calculateMortgageProps {
  mortgageAmount: number;
  mortgageTerm: number;
  interestRate: number;
}

interface formatNumberProps {
  value: number;
  decimals?: number;
}

export function calculateMortgage({
  mortgageAmount,
  mortgageTerm,
  interestRate,
}: calculateMortgageProps): resultPaymentProps {
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = mortgageTerm * 12;
  const monthlyPayment =
    (mortgageAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments))) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  const totalPayment = monthlyPayment * totalPayments;

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
  };
}

export function formatNumber({
  value,
  decimals = 2,
}: formatNumberProps): string {
  return value.toLocaleString("en-Us", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
