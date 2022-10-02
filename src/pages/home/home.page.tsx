import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import CategoryComponent from '@/components/category-component';
import CountryComponent from '@/components/country-component';
import Layout from '@/components/layout';
import PlatformComponent from '@/components/platform-component';

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
        <CountryComponent ref={countryRef} />
        <PlatformComponent ref={platformRef} componentId={componentId} />
        <CategoryComponent ref={categoryRef} componentId={componentId} />
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
