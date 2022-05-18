export default function Index() {
  return (
    <div>
      <h1 className="mb-4 text-2xl">Welcome to Remix</h1>

      <ul className="flex flex-col flex-wrap gap-2 md:flex-row">
        {[
          ["https://remix.run/tutorials/blog", "15m Quickstart Blog Tutorial"],
          ["https://remix.run/tutorials/jokes", "Deep Dive Jokes App Tutorial"],
          ["https://remix.run/docs", "Remix Docs"],
        ].map(([href, label], index) => (
          <li className="flex-1" key={index}>
            <a
              className="block h-full rounded-lg bg-violet-500 p-6 text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
              target="_blank"
              href={href}
              rel="noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
