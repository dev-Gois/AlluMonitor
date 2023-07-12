import React from "react";
import { Picker } from '@react-native-picker/picker';

import { Container, Title } from './styles';

import { CATEGORIES } from '../../utils/category';

export type CategoriesProps = "Insucesso ADS 2022.1";

type Props = {
  selectedValue: CategoriesProps;
  onValueChange: (value: CategoriesProps) => void;
}

export function Header({ selectedValue, onValueChange }: Props) {
  return (
    <Container>
      <Title>AlluMonitor</Title>

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: CategoriesProps) => onValueChange(itemValue)}
        style={{
          backgroundColor: '#FFF',
          height: 50,
          flex: 1,
          marginLeft: 50
        }}
      >
        {
          CATEGORIES.map(item => (
            <Picker.Item
              key={item.label}
              label={item.label}
              value={item.label}
            />
          ))
        }
      </Picker>
    </Container>
  );
}
