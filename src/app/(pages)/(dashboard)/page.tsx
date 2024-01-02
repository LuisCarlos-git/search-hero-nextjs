import { Metadata } from 'next';

import { Card } from '@/components';

export const metadata: Metadata = {
  title: 'Strike team - dashboard',
  description: 'dashboard to search hero'
};

export default function Dashboard() {
  return (
    <div>
      <div className="max-w-[375px]">
        <Card.Minimal />
      </div>
      <Card.Full />
      <Card.Full isRounded />
    </div>
  );
}
