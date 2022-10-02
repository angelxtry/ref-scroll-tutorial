import { forwardRef } from 'react';

import FullSizePageContainer from '@/components/full-size-page-container';

const CountryComponent = forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref}>
    <FullSizePageContainer>
      <FullSizePageContainer.Title>국가를 선택해 주세요.</FullSizePageContainer.Title>
      <div>
        <div className='text-content-subtitle'>
          국가 선택<span className='text-content-subtitle text-primary'>*</span>
        </div>
        <div className='pt-[20px]' />
      </div>
    </FullSizePageContainer>
  </div>
));

export default CountryComponent;
