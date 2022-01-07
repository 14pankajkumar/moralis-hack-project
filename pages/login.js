import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

const login = () => {
  const { authenticate, isAuthenticating, isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) return router.push("/");
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <button
          onClick={authenticate}
          className="text-3xl font-bold bg-yellow-500 p-3 rounded-lg outline-none"
        >
          {isAuthenticating ? "Authenticating..." : "Login"}
        </button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
};

export default login;
