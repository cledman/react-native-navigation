import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  border-color: #eee;
  border-bottom-width: 1px;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #e9e9e9;
  border-radius: 4px;
  flex: 1;
  height: 40px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  background: #f04227;
  border-radius: 4px;
  justify-content: center;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  flex: 1,
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Tech = styled.View`
  border-color: #eee;

  border-radius: 4px;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const Name = styled.Text`
  align-items: center;
  background: #e9e9e9;
  border-radius: 4px;
  color: #333;
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  padding: 12px 15px;
`;

export const ProfileButton = styled(RectButton)`
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 4px;
  justify-content: center;
  margin-left: 10px;
  opacity: 1;
  padding: 0 12px;
`;
