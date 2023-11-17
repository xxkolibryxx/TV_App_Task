export function convertMillisecondsToHours(milliseconds) {
  const hours = Math.floor(milliseconds / 3600);
  const remainingMilliseconds = milliseconds % 3600;
  const minutes = Math.round(remainingMilliseconds / 60);
  let result = '';
  if (hours > 0) {
    result += `${hours}h `;
  }
  if (minutes > 0) {
    result += `${minutes}min`;
  }

  return result.trim();
}
export function removeDuplicatesKeepOrder(arr) {
  const uniqueSet = new Set();
  return arr.filter((item) => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      return true;
    }
    return false;
  });
}
