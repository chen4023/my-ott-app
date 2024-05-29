export default function Button({ text }) {
  return (
    <button className="w-[400px] bg-brand text-white px-6 py-3 rounded-md text-lg">
      {text}
    </button>
  );
}
