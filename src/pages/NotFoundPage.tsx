import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import { ChevronRightIcon } from "../components/icons";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#141414]">
      <TopBar />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <div className="text-[80px] font-medium leading-none text-white/15 md:text-[120px]">
          404
        </div>
        <h1 className="mt-4 text-[28px] font-medium text-white md:text-[34px]">
          This page slipped out.
        </h1>
        <p className="mt-3 max-w-[380px] text-[13px] leading-[20px] text-white/55">
          The page you're looking for doesn't exist or has moved. Let's get you
          back to the warmth.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex h-[44px] items-center gap-2 rounded-full bg-white pl-7 pr-5 text-[12.5px] font-semibold text-[#1c1c1c] transition hover:scale-[1.03]"
        >
          Back to home
          <ChevronRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-[2px]" />
        </Link>
      </main>
    </div>
  );
}
