import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const FlexDirectionBasics = () => {
    const [flexDirection, setFlexDirection] = React.useState("row");
    return (
        <PreviewLayout
            label={"flexDirection"}
            values={["column", "row", "row-reverse", "column-reverse"]}
            selectedValue={flexDirection}
            setSelectedValue={setFlexDirection}
        >
            <View
                style={[styles.box, { backgroundColor: "powderblue" }]}
            ></View>
            <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
            <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
        </PreviewLayout>
    );
};

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => {
    return (
        <View style={{ padding: 10, flex: 1 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.row}>
                {values.map((value) => {
                    return (
                        <TouchableOpacity
                            key={value}
                            onPress={() => setSelectedValue(value)}
                            style={[
                                styles.button,
                                selectedValue === value && styles.selected,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.buttonLabel,
                                    selectedValue === value &&
                                        styles.selectedLabel,
                                ]}
                            >
                                {value}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={[styles.container, { [label]: selectedValue }]}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    button: {
        backgroundColor: "oldlace",
        padding: 8,
        borderRadius: 4,
        alignSelf: "flex-start",
        margin: 8,
        textAlign: "center",
    },

    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    box: {
        width: 50,
        height: 50,
        margin: 10,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
});

export default FlexDirectionBasics;
