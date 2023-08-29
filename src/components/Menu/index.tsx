import { FlatList, TouchableOpacity } from "react-native";

import { products } from "../../mocks/products";
import { Text } from "../Text";

import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={ product.imagePath }
          />

          <ProductDetails>
            <Text weight='600' size={20}>{product.name}</Text>
            <Text color="#666666" style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={18} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
