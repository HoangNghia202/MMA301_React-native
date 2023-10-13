import React, { useState } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import * as ImagePicker from "react-native-image-picker";

export default function ImageApi() {
    const [selectedImage, setSelectedImage] = useState(null);

    const selectImage = () => {
        const options = {
            title: "Select Image",
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
        };
    };

    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        // Explore the result
        console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    };

    return (
        <View>
            {selectedImage && (
                <Image
                    source={selectedImage}
                    style={{ width: 200, height: 200 }}
                />
            )}
            <Button
                title="Select Image"
                onPress={() => {
                    showImagePicker();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
