export default function Head() {
  return (
    <>
      {/* Explicit favicon links to force browsers to fetch the new icon */}
      <link rel="icon" href="/favicon.ico?v=3" />
      <link rel="icon" type="image/svg+xml" href="/logo.svg?v=3" />
      <link rel="apple-touch-icon" href="/favicon.ico?v=3" />
    </>
  );
}
