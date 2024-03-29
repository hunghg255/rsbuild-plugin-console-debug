import { useEffect, useState } from 'react';

const HelloWorld = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('HelloWorld mounted');
    console.log({
      a: 1,
    });

    return () => {
      console.log('HelloWorld unmounted');
    };
  }, [count]);

  return (
    <div>
      <h1>Rsbuild + Reac111 2t</h1>

      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>App.tsx</code> to test HMR
        </p>
      </div>
    </div>
  );
};

export default HelloWorld;
