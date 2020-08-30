const daysOfTheWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function populateMissingDays(days) {
  const populatedDaysOfTheWeek = daysOfTheWeek.reduce((acc, dayName) => {
    acc.set(dayName, days[dayName] || []);
    return acc;
  }, new Map());
  return Object.fromEntries(populatedDaysOfTheWeek);
}

module.exports = {
  populateMissingDays,
};
