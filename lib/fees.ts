export const fees = {
  evaluation: { minutes: 90, amount: 300, reportBusinessDays: 10 },
  sessions: [
    { minutes: 30, amount: 80 },
    { minutes: 45, amount: 110 },
    { minutes: 60, amount: 140 },
  ],
  consultation: { minutes: 15, amount: 20 },
  packageDiscountPercent: 10,
} as const;

const sessionAmounts = fees.sessions.map((session) => session.amount);
export const sessionPriceRange = `$${Math.min(...sessionAmounts)}–$${Math.max(...sessionAmounts)}`;

export const discountedSessions = fees.sessions.map((session) => ({
  minutes: session.minutes,
  amount: session.amount * (100 - fees.packageDiscountPercent) / 100,
}));
