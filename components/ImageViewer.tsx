import { FC } from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";

export interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType;
  selectedImage: string | null;
}
const ImageViewer: FC<ImageViewerProps> = ({
  placeholderImageSource,
  selectedImage,
}) => {
  const source = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={source} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
