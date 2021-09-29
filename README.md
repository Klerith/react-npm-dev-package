# FH-ProductCard
Este es un paquete de pruebas de despliegues en NPM

## Importaciones
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'fh-product-card-1';
```

```
<ProductCard 
    key={ product.id }
    product={ product }
    initialValues={{
        count: 6,
        maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```