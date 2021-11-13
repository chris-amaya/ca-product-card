# Ejemplo

```ts
import { ProductCard, ProductBottons, ProductImage, ProductTitle } from '../.';
```

```tsx
<ProductCard
  key={product.id}
  product={product}
  className="bg-dark"
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset }) => (
    <>
      <ProductImage className="custom-image" />
      <ProductTitle className="text-white"></ProductTitle>
      <ProductBottons className="custom-buttons"></ProductBottons>

      <button onClick={reset}>Reset</button>
    </>
  )}
</ProductCard>
```
