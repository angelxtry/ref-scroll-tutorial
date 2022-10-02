import FullSizePageContainer from '@/components/full-size-page-container';

const CategoryComponent = () => (
  <FullSizePageContainer>
    <FullSizePageContainer.Title>카테고리를 선택해 주세요.</FullSizePageContainer.Title>
    <div>
      <div className='text-content-subtitle'>
        카테고리 선택<span className='text-content-subtitle text-primary'>*</span>
      </div>
      <div className='pt-[20px]' />
    </div>
  </FullSizePageContainer>
);

export default CategoryComponent;
