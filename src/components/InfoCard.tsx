import { bscTestnet } from "viem/chains";

import { MOOND_TOKEN_ADDR } from "../contracts";
import InfoSVG from "./svg/Info";

type InfoCardType = {
  className?: string;
};

const InfoCard: React.FC<InfoCardType> = ({ className }) => {
  return (
    <div className={className ?? ""}>
      <InfoSVG className="w-[20px] text-black dark:text-white peer cursor-pointer" />
      <div className="bg-[#ddfef0] border-2 border-[#7eb09b] text-[#338639] dark:bg-[#5fa365] dark:border-[#2b5e48] dark:text-[#f8f8f8] rounded-[30px] p-4 max-w-[max(calc(91.66vw-32px),288px)] w-[388px] text-xs break-words hidden absolute right-0 peer-hover:block">
        Welcome to the MoonsDust Airdrop!
        <br />
        <br />
        Exciting News: We&apos;re airdropping 10,000 MOOND tokens to POOP
        holders like you! Your share is based on your POOP holdings during the
        snapshot compared to the total POOP supply, divided by 10,000 MOOND.
        <br />
        <br />
        <br />
        Formula: POOP Held / Total POOP Supply * 10,000 MOOND
        <br /> <br />
        Thank you for being a part of our community! Enjoy your MOOND tokens.
        <br /> <br />
        Questions? Reach out to our support team.
        <br /> <br />
        Happy Airdropping! 🌕
        <br /> <br />
        MOOND Contract Address on Arbitrum Nova: <br />
        <a
          href={`https://nova.arbiscan.io/token/${
            MOOND_TOKEN_ADDR[bscTestnet.id]
          }`}
          target="_blank"
          className="font-bold mt-4 underline hover:brightness-90 active:brightness-95 transition-all"
        >
          {MOOND_TOKEN_ADDR[bscTestnet.id]}
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
