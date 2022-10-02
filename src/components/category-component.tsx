import { forwardRef } from 'react';

import FullSizePageContainer from '@/components/full-size-page-container';

interface CategoryComponentProps {
  componentId: number;
}

const CategoryComponent = forwardRef<HTMLDivElement, CategoryComponentProps>(
  (props, ref) => (
    <div ref={ref} className={`${props.componentId <= 2 && 'hidden'}`}>
      <FullSizePageContainer>
        <FullSizePageContainer.Title>
          카테고리를 선택해 주세요.
        </FullSizePageContainer.Title>
        <div>
          <div className='text-content-subtitle'>
            카테고리 선택<span className='text-content-subtitle text-primary'>*</span>
          </div>
          <div className='pt-[20px]' />
        </div>
      </FullSizePageContainer>
    </div>
  ),
);

export default CategoryComponent;
