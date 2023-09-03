import { Modal, ImageBackground, FlatList } from "react-native";

import { Text } from "../Text";
import { Product } from "../../types/Product";
import { CloseButton, Header, Image, IngredientsContainer, ModalBody, Ingredient, Footer, FooterContainer, PriceContainer } from "./styles";
import { Close } from "../Icons/Close";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  console.log('SRC: '+product?.imagePath)
  if(!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: product.imagePath.src
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={32} weight="600">{product.name}</Text>
          <Text color="#666" size={20} style={{ marginTop: 8 }}>{product.description }</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" size={24} color="#666">Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: igrendient }) => (
                <Ingredient>
                  <Text>{igrendient.icon}</Text>
                  <Text size={16} color="#666">{igrendient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}

      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
              <Text size={20} color="#666">Preço</Text>
              <Text size={28} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={() => alert('Adicionar ao pedido')}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  )
}
