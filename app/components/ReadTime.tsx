export default function ReadTime({ minutes }: { minutes: number }) {
  return (
    <span>
      {minutes <= 3 ? "Quick read" : `${minutes} min read`}
    </span>
  );
}