import { useState, useEffect } from 'react';
import styles from './ExpandingComponent.module.css';

type ExpandingComponentProps = {
  bcg: string;
}
const ExpandingComponent = ({ children, bcg }: { children: React.ReactNode } & ExpandingComponentProps) => {
  const [width, setWidth] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const maxScroll = viewportHeight;
      const percentage = (scrollPosition / maxScroll) * 100;

      // Set the width based on the scroll position
      setWidth(Math.min(10 + percentage, 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    
  }, []);

  return (
    <div className={`${styles.expandContainer}`}>
      <div className={styles.innerContainer} style={{ width: `${width}%` , backgroundColor: bcg}}>
        <div style={{backgroundColor: bcg}} className={`${styles.children} ${width > 10 ? styles.displayChildren : ''}`}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default ExpandingComponent;
