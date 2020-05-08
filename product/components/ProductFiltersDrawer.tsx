import React from "react";
import {
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  Box,
  Input,
  InputGroup,
  Text,
  InputLeftElement,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/core";

import {Product} from "../types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  categories: Product["category"][];
  category: Product["category"];
  query: string;
  onCategoryChange: (category: Product["category"]) => void;
  onQueryChange: (query: Product["title"]) => void;
}

const ProductFiltersDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  onQueryChange,
  onCategoryChange,
  categories,
  category,
  query,
}) => {
  return (
    <Drawer id="filters" isOpen={isOpen} placement="right" size="md" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton right="8px" top="8px" zIndex={2} />
        <DrawerHeader padding={0}>
          <InputGroup size="lg">
            <InputLeftElement children={<Icon name="search" />} color="gray.300" fontSize="1.2em" />
            <Input
              autoFocus
              paddingRight={12}
              placeholder="Buscar productos"
              rounded={0}
              size="lg"
              value={query}
              variant="flushed"
              onChange={(event) => onQueryChange(event.target.value)}
            />
          </InputGroup>
        </DrawerHeader>
        <DrawerBody overflowY="auto" paddingX={4} paddingY={0}>
          <Flex cursor="pointer" direction="column">
            <Text
              fontSize="md"
              fontWeight={600}
              paddingY={3}
              width="100%"
              onClick={() => onCategoryChange("")}
            >
              Todos los productos
            </Text>
            <Divider marginY={0} />
            {categories.map((value) => (
              <Box key={value}>
                <Flex
                  alignItems="center"
                  cursor="pointer"
                  justifyContent="space-between"
                  paddingY={3}
                  onClick={() => onCategoryChange(value)}
                >
                  <Text fontSize="md" fontWeight={600}>
                    {value}
                  </Text>
                  {category === value && <Icon color="primary.500" name="check" />}
                </Flex>
                <Divider marginY={0} />
              </Box>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductFiltersDrawer;
