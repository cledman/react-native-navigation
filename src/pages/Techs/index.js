import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, Alert } from 'react-native';
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

import api from '../../services/api';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState(null);

  async function handleAddTech() {
    setLoading(true);

    const { data } = await api.post('/techs/', {
      id: newTech,
    });

    setTechs([...techs, data]);
    setLoading(false);

    setNewTech(null);
    Keyboard.dismiss();

  }

  async function handleDeleteTech(id) {
    await api.delete(`/techs/${id}`);
    const filteredTechs = techs.filter((item) => item.id !== id);
    setTechs(filteredTechs);
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar Tecnologia"
          value={newTech}
          onChangeText={setNewTech}
          returnKeyType="send"
          onSubmitEditing={handleAddTech}
        />
        <SubmitButton loading={loading} onPress={handleAddTech}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="add" size={20} color="#fff" />
          )}
        </SubmitButton>
      </Form>
      <List
        data={techs}
        keyExtractor={(tech) => tech.id}
        renderItem={({ item }) => (
          <Tech>
            <Name>{item.id}</Name>

            <ProfileButton background="#ffc107" onPress={() => {}}>
              <Icon name="design-services" size={20} color="#fff" />
            </ProfileButton>

            <ProfileButton
              background="#e0a800"
              onPress={() => handleDeleteTech(item.id)}
            >
              <Icon name="delete" size={20} color="#fff" />
            </ProfileButton>
          </Tech>
        )}
      />
    </Container>
  );
}
