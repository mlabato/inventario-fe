import { useContext } from "react";
import ProductContext from "../store/product-context";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon, EditIcon, NotAllowedIcon } from "@chakra-ui/icons";

const ProductsContainer = () => {
  const productsCtx = useContext(ProductContext);
  const products = productsCtx?.products;
  const isLoading = productsCtx?.isLoading;

  return (
    <TableContainer p={10}>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Th>Estado</Th>
          <Th>Código</Th>
          <Th>Marca</Th>
          <Th>Modelo</Th>
          <Th>Fecha de alta</Th>
          <Th>Empleado</Th>
          <Th>Area</Th>
          <Th>Acciones</Th>
        </Thead>
        <Tbody>
          {products.map((product) => {
            return (
              <Tr>
                <Td>
                  {product.active ? (
                    <CheckCircleIcon color="green.500" />
                  ) : (
                    <NotAllowedIcon color="red.500" />
                  )}
                </Td>
                <Td>{product._id}</Td>
                <Td>{product.brand}</Td>
                <Td>{product.model} </Td>
                <Td>{product.registrationDate} </Td>
                <Td> {product.user}</Td>
                <Td>{product.area} </Td>
                <Td><a><EditIcon /></a> <a><CloseIcon /></a> </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsContainer;
