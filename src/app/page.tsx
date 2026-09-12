import messages from "../../messages/es.json";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">{messages.Hero.heading}</h1>
      <div aria-hidden="true" className="mt-4 h-2 w-16 bg-brand-mint" />
    </main>
  );
}
