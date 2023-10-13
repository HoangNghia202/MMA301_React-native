import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const StyleMaker = () => {
    return (
        <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "#ffc600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ color: "black" }}>Nghia</Text>
        </View>
    );
};

const location = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
};

const Map = ({ navigation }) => {
    return (
        <>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                mapType="hybrid"
                region={location}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                >
                    <StyleMaker />
                </Marker>
            </MapView>

            <View>
                <Button
                    style={{ margin: 20 }}
                    title="Go To Image"
                    onPress={() => navigation.navigate("Image")}
                />
            </View>
        </>
    );
};

export default Map;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        height: "80%",
        margin: 20,
        marginTop: 50,
        borderRadius: 20,
    },
});
