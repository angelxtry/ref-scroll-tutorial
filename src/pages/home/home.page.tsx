import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import FullSizePageContainer from '@/components/full-size-page-container';
import Layout from '@/components/layout';

const HomePage = () => {
  const countryRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  const [componentId, setComponentId] = useState<number>(1);

  const componentList = [
    {
      id: 1,
      ref: countryRef,
    },
    {
      id: 2,
      ref: platformRef,
    },
    {
      id: 3,
      ref: categoryRef,
    },
  ];

  const scrollToId = (itemId: number) => {
    const component = componentList.find((item) => item.id === itemId);
    if (!component) {
      return;
    }

    component.ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onClickNext = () => {
    setComponentId((prevState) => {
      if (componentList.length > componentId) {
        return prevState + 1;
      }
      return prevState;
    });
  };

  useEffect(() => {
    scrollToId(componentId);
  }, [componentId]);

  return (
    <Layout>
      <div className='w-full px-20 bg-white relative'>
        <div ref={countryRef}>
          <FullSizePageContainer>
            <FullSizePageContainer.Title>
              국가를 선택해 주세요.
            </FullSizePageContainer.Title>
            <div>
              <div className='text-content-subtitle'>
                국가 선택<span className='text-content-subtitle text-primary'>*</span>
              </div>
              <div className='pt-[20px]' />
            </div>
          </FullSizePageContainer>
        </div>
        <div ref={platformRef} className={`${componentId <= 1 && 'hidden'}`}>
          <FullSizePageContainer>
            <FullSizePageContainer.Title>
              플랫폼을 선택해 주세요.
            </FullSizePageContainer.Title>
            <div>
              <div className='text-content-subtitle'>
                플랫폼 선택<span className='text-content-subtitle text-primary'>*</span>
              </div>
              <div className='pt-[20px]' />
            </div>
          </FullSizePageContainer>
        </div>
        <div ref={categoryRef} className={`${componentId <= 2 && 'hidden'}`}>
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
      </div>
      <div className='fixed bottom-10 right-20 space-x-4'>
        <Button type='button' className='w-80' onClick={onClickNext}>
          {componentList.length > componentId ? '다음' : '완료'}
        </Button>
      </div>
    </Layout>
  );
};

export default HomePage;
