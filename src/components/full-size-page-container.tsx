import { PropsWithChildren } from 'react';

const FullSizePageContainer = ({ children }: PropsWithChildren) => (
  <div className='min-h-screen p-4 flex flex-col border'>
    <div className='flex-1 w-[1280px]'>{children}</div>
  </div>
);

const Title = ({ children }: PropsWithChildren) => (
  <div className='py-[3.75rem] text-content-title'>{children}</div>
);

FullSizePageContainer.Title = Title;

export default FullSizePageContainer;
