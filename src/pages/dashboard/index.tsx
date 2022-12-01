import React from "react";
import dynamic from "next/dynamic";

import MessageBox from "@/components/MessageBox";

const BaseLayout = dynamic(() => import("@/components/Layout/BaseLayout"), {
  ssr: false,
});

const Dashboard = () => {
  return (
    <BaseLayout>
      <MessageBox />
    </BaseLayout>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
