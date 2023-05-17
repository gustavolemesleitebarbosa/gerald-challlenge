import { RouteProp } from '@react-navigation/native';
import { Text } from "react-native";

type RootStackParamList = {
  Content: { screenName: string };
};

type ContentScreenRouteProp = RouteProp<RootStackParamList, 'Content'>;

type ContentScreenProps = {
  route: ContentScreenRouteProp;
};

const ContentScreen: React.FC<ContentScreenProps> = ({ route }) => {
  const { screenName } = route.params;

  return (
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>
      {screenName}
    </Text>
  );
};

export default ContentScreen;