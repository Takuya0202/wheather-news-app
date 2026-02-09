import { Modal, Text, View } from "react-native";

type Size = "small" | "medium" | "large";
interface props {
  size: Size;
  close: () => void;
  visible: boolean;
}
export default function EditModal({ size, close, visible }: props) {
  return (
    <Modal visible={visible} animationType="fade">
      <View>
        <Text>EditModal</Text>
      </View>
    </Modal>
  );
}
