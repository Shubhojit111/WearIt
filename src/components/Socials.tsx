import { BehanceIcon, DribbbleIcon, FacebookIcon, InstagramIcon } from "./icons";

export default function Socials({ className = "" }: { className?: string }) {
  const item =
    "text-white/80 transition-all duration-200 hover:text-white hover:scale-110";
  return (
    <div className={`flex items-center gap-[36px] ${className}`}>
      <a href="#" aria-label="Instagram" className={item}>
        <InstagramIcon className="h-[17px] w-[17px]" />
      </a>
      <a href="#" aria-label="Facebook" className={item}>
        <FacebookIcon className="h-[17px] w-[17px]" />
      </a>
      <a href="#" aria-label="Dribbble" className={item}>
        <DribbbleIcon className="h-[17px] w-[17px]" />
      </a>
      <a href="#" aria-label="Behance" className={item}>
        <BehanceIcon className="h-[19px] w-[19px]" />
      </a>
    </div>
  );
}
