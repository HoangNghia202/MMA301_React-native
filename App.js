import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { IosComponent, AndroidComponent } from "./components";
import FlexDirectionBasics from "./components/layout";
export default function App() {
    return (
        <View style={styles.container}>
            <FlexDirectionBasics />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: {
                backgroundColor: "#feae",
            },
            android: {
                backgroundColor: "#fad",
            },
            web: {
                backgroundColor: "#aef",
            },
            default: {
                backgroundColor: "#fff",
            },
        }),
    },
});
