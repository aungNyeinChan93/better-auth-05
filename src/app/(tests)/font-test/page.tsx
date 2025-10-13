import React from "react";
import { Aboreto } from "next/font/google";
import { appRouterContext } from "next/dist/server/route-modules/app-route/shared-modules";

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
});

const FontTestPage = async () => {
  return (
    <React.Fragment>
      <main>
        <p
          className={`${aboreto.className} text-2xl font-bold tracking-widest`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe
          voluptatem voluptates.
        </p>
      </main>
    </React.Fragment>
  );
};

export default FontTestPage;
