export async function generateMetadata() {
  await fetch("https://google.com");
  throw new Error("Error");
}

export default function Page() {
  return <h1>Hello world</h1>;
}
