// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = state => {
  const sessionState = sessionStorage.getItem(state)
  return sessionState && JSON.parse(sessionState)
  // if sessionState exists
  // we parse it into JSON
  // as items in storage only exist as a string
  // and return it
}