import React from 'react';

type TSectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeader({ children }: TSectionHeadingProps) {
  return <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>;
}
