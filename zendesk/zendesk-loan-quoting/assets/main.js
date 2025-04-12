function getCreditRating(creditScore) {
  // Convert credit score value to rating
  const scoreMap = {
    'excellent': 'EXCELLENT',
    'good': 'GOOD',
    'fair': 'FAIR',
    'poor': 'FAIR'
  };
  return scoreMap[creditScore];
}

function calculateMonthlyPayment(principal, annualInterestRate, months) {
  const monthlyRate = annualInterestRate / 100 / 12;
  if (monthlyRate === 0) {
    return principal / months;
  }
  return principal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));
}

function makeRateEntry(principal, termMonths, apr) {
  const monthlyPayment = calculateMonthlyPayment(principal, apr, termMonths);
  const totalPaid = monthlyPayment * termMonths;
  return {
    termMonthCount: termMonths,
    annualPercentageRate: apr,
    approvedMonthlyPaymentAmount: monthlyPayment,
    totalPaid: totalPaid
  };
}

document.getElementById('submit').addEventListener('click', function() {
  const amount = parseFloat(document.getElementById('loanAmount').value);
  const creditScore = document.querySelector('input[name="creditScore"]:checked')?.value;
  
  if (isNaN(amount) || !creditScore) {
    alert('Please fill in all required fields');
    return;
  }

  const aprMapping = {
    'FAIR': [9.50, 9.60, 9.70],
    'GOOD': [8.00, 8.10, 8.20],
    'VERY_GOOD': [7.00, 7.10, 7.20],
    'EXCELLENT': [6.54, 6.64, 6.74]
  };

  const creditRating = getCreditRating(creditScore);
  const [apr72, apr60, apr48] = aprMapping[creditRating];

  const rates = [
    makeRateEntry(amount, 72, apr72),
    makeRateEntry(amount, 60, apr60),
    makeRateEntry(amount, 48, apr48)
  ].sort((a, b) => b.termMonthCount - a.termMonthCount);

  // Updated result display
  let quotesHtml = '<ul class="space-y-2">';
  
  rates.forEach(rate => {
    const monthlyPayment = rate.approvedMonthlyPaymentAmount.toFixed(2);
    const apr = rate.annualPercentageRate.toFixed(2);
    const months = rate.termMonthCount;
    
    quotesHtml += `
      <li class="bg-white p-2 rounded border border-gray-300">
        ${months} months @ ${apr}% APR - $${monthlyPayment}/month
      </li>
    `;
  });
  
  quotesHtml += '</ul>';
  document.getElementById('quotesPanel').innerHTML = quotesHtml;
});
  