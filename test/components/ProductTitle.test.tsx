import * as React from 'react';

import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  it('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Mi titulo personalizado" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
