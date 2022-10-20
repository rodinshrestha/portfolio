import React from 'react';
// import BaseLayout from '@/components/Layout/BaseLayout';
import dynamic from 'next/dynamic';

const BaseLayout = dynamic(() => import('@/components/Layout/BaseLayout'), { ssr: false });

const Dashboard = () => {
  return <BaseLayout>Dashboard</BaseLayout>;
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
