import { useState } from 'react';
import scss from './HomePages.module.scss';
export const HomePages = () => {
  const [count, setCount] = useState();
  return (
    <div className={scss.homePages}>
      <div className="container">
        <div className={scss.content}>

        </div>
      </div>
    </div>
  )
}
