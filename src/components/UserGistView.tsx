import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { color } from "../utills/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export type Props = {
  userName: string;
  createdAt: string;
  updatedAt: string;
  index: string;
  imagePath: string;
  desc: string;
  fileLength: number;
  fileArray : any[];
};
const UserGistView : React.FC<Props> = ({
  userName,
  createdAt,
  updatedAt,
  index,
  imagePath,
  desc,
  fileLength,
  fileArray = [],
}) => {
  
  const antDesignIcon = (name:string, size:number) => {
    return <AntDesign name={name} color={color.blue} size={size} />;
  };

  return (
    <View key={index?.toString()} style={styles.rootView}>
      <View style={styles.rowCentered}>
        <Image source={{ uri: imagePath }} style={styles.userImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <View style={{ ...styles.rowCentered, marginTop: moderateScale(5) }}>
        <Text style={styles.semiBoldText}>{createdAt}</Text>
        <Text style={styles.semiBoldText}>{updatedAt}</Text>
      </View>
      <Text style={styles.descText}>{desc || "---"}</Text>

      <View
        style={{
          ...styles.rowCentered,
          ...styles.justifyCenter
        }}
      >
        <View style={{ ...styles.rowCentered }}>
          <Feather name={"code"} color={color.blue} size={moderateScale(15)} />
          <Text
            style={{ ...styles.semiBoldText, ...styles.marginLeft }}
          >{`${fileLength} Files`}</Text>
        </View>
        <View style={{ ...styles.rowCentered }}>
          {antDesignIcon("fork", moderateScale(13))}
          <Text style={{ ...styles.semiBoldText, ...styles.marginLeft }}>
            Forks
          </Text>
        </View>
        <View style={{ ...styles.rowCentered }}>
          <FontAwesome
            name={"comment-o"}
            color={color.blue}
            size={moderateScale(15)}
          />

          <Text style={{ ...styles.semiBoldText, ...styles.marginLeft }}>
            Comments
          </Text>
        </View>
        <View style={{ ...styles.rowCentered }}>
          {antDesignIcon("staro", moderateScale(15))}
          <Text style={{ ...styles.semiBoldText, ...styles.marginLeft }}>
            Stars
          </Text>
        </View>
      </View>

      <View>
        {fileArray.map((item, index) => {
          return (
            <View style={styles.fileArrayRootView}>
              {antDesignIcon("filetext1", moderateScale(15))}
              <Text style={styles.fileNAme}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export const MemoizedUserGistView = React.memo(UserGistView);

const styles = StyleSheet.create({
  rootView: {
    width: "99%",
    backgroundColor: "white",
    shadowColor: "rgba(0, 26, 77, 0.7)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(12),
    padding: moderateScale(10),
  },
  rowCentered: {
    flexDirection: "row",
    alignItems: "center",
  },
  semiBoldText: {
    fontWeight: "400",
    fontSize: moderateScale(10),
    color: color.text,
  },
  marginLeft: {
    color: color.blue,
    marginLeft: moderateScale(3),
  },
  fileArrayRootView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(4),
  },
  fileNAme: {
    width: "80%",
    fontSize: moderateScale(10),
    color: color.blue,
    marginLeft: moderateScale(4),
  },
  descText: {
    fontWeight: "400",
    fontSize: moderateScale(11),
    color: color.text,
    marginVertical: moderateScale(8),
  },
  userName: {
    fontWeight: "500",
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
    color: color.text,
  },
  userImage: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(10),
    backgroundColor:'grey'
  },
  justifyCenter:{
    justifyContent: "space-between",
          width: "80%",
  }
});
