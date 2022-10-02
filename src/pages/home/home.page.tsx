import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import CategoryComponent from '@/components/category-component';
import CountryComponent from '@/components/country-component';
import Layout from '@/components/layout';
import PlatformComponent from '@/components/platform-component';

const componentList = [
  { id: 1, item: <CountryComponent /> },
  { id: 2, item: <PlatformComponent /> },
  { id: 3, item: <CategoryComponent /> },
];

const HomePage = () => {
  const [componentId, setComponentId] = useState<number>(1);
  const componentRef = useRef<Map<number, HTMLDivElement> | null>(null);

  const getMap = () => {
    if (!componentRef.current) {
      componentRef.current = new Map<number, HTMLDivElement>();
    }
    return componentRef.current;
  };

  const scrollToId = (itemId: number) => {
    const map = getMap();
    const item = map.get(itemId);
    if (!item) {
      return;
    }
    item.scrollIntoView({ behavior: 'smooth' });
  };

  const onClickNext = () => {
    const currentComponent = componentList.find(
      (component) => component.id === componentId,
    );

    if (!currentComponent) {
      return;
    }

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
        {componentList.map((component) => (
          <div
            key={component.id}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(component.id, node);
              } else {
                map.delete(component.id);
              }
            }}
            className={`${component.id > componentId && 'hidden'}`}
          >
            {' '}
            {component.item}
          </div>
        ))}
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
