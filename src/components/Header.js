import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import AntDesign from "react-native-vector-icons/AntDesign";
import { color } from "../utills/colors";
import Loader from "./Loader";

const Header = ({onChange,value,isLoading=false}) => {
  return (
    <View style={styles.headerRootView}>
      <AntDesign name={"github"} color={color.white} size={moderateScale(30)} />
      <TextInput
        placeholderTextColor={"rgba(41, 38, 42, 0.6)"}
        placeholder="Search Gist for the username"
        multiline
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
      {isLoading?<Loader color={color.white}/>:null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerRootView: {
    flexDirection: "row",
    padding: moderateScale(10),
    alignItems: "center",
    backgroundColor: color.black,
  },
  input: {
    borderRadius: moderateScale(10),
    height: moderateScale(40),
    backgroundColor: color.white,
    paddingHorizontal: moderateScale(10),
    width: "70%",
    marginLeft: moderateScale(20),
  },
});
