import * as React from 'react';

import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductImage', () => {
  it('debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('debe de mostrar el componente con imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
