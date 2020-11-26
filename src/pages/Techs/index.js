import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Tech,
  Name,
  ProfileButton
} from './styles';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState([]);

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar Tecnologia"
          value={newTech}
          onChange={setNewTech}
          returnKeyType="send"
          onSubmitEditing={() => {}}
        />
        <SubmitButton loading={loading} onPress={() => {}}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ): (
            <Icon name="add" size={20} color="#fff" />
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
