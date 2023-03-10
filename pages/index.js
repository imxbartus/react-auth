import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Authentication via Google and Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <h2 className="text-2xl mt-10">
          Logowanie za pomocą <br />
          Google & Facebook
        </h2>
        <h3 className="mt-1">
          Sprawdź jak to działa <b>dołączając teraz</b>
        </h3>
      </main>
    </div>
  );
}
