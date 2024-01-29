import { useEffect } from 'react';

function ProductOptional() {
  const x = 10;
  if (false) return;

  useEffect(function () {}, []);
  return <div>optional</div>;
}

export default ProductOptional;
