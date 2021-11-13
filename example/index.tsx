import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductBottons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Product title',
};

const App = () => {
  return (
    <div>
      <ProductCard product={product}>
        {({ reset }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white"></ProductTitle>
            <ProductBottons className="custom-buttons"></ProductBottons>

            <button onClick={reset}>Reset</button>
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
