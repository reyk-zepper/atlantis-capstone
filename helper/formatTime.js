export default function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
