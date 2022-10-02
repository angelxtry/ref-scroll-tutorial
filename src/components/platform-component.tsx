import FullSizePageContainer from '@/components/full-size-page-container';

const PlatformComponent = () => (
  <FullSizePageContainer>
    <FullSizePageContainer.Title>플랫폼을 선택해 주세요.</FullSizePageContainer.Title>
    <div>
      <div className='text-content-subtitle'>
        플랫폼 선택<span className='text-content-subtitle text-primary'>*</span>
      </div>
      <div className='pt-[20px]' />
    </div>
  </FullSizePageContainer>
);

export default PlatformComponent;
