import React from 'react';

type GridProps = {
  children: React.ReactNode;
};

export function Grid({ children }: GridProps) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">{children}</div>
  );
}
