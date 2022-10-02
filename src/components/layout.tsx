import { PropsWithChildren } from 'react';

import Nav from '@/components/nav';

const Layout = ({ children }: PropsWithChildren) => (
  <div className='min-h-screen h-screen flex flex-col'>
    <div className='flex-1 flex flex-row overflow-y-hidden'>
      <main className='flex-1 overflow-y-auto'>{children}</main>
      <Nav />
    </div>
  </div>
);

export default Layout;
