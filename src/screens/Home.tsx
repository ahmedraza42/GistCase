import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { color } from "../utills/colors";
import { moderateScale } from "react-native-size-matters";
import Header from "../components/Header";
import { useAllGist } from "../service/Gistcontroller";
import Loader from "../components/Loader";
import { MemoizedUserGistView } from "../components/UserGistView";
import { useSelector } from "react-redux";
import d from "lodash";
import axios from "axios";
import { showToast } from "../components/Toast";
import { IUser } from "../Types";

const HomeScreen = () => {
  //custom hook to get all userGist
  const { loading: loading, data: gistData } = useAllGist();
  const reduxGistData = useSelector((state:any) => state.gist.allGist);
  const [serachText, setSearchText] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [serachResult, setSearchResult] = useState([]);
  
  //this method will wait half second to execute so the user can easily type a proper name in search
  const handler = React.useMemo(
    () => d.debounce((searchText) => getSearchDetail(searchText), 500),
    []
  );
  

  const getSearchDetail = async (searchText:string) => {
    try {
      setSearchLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${searchText}/gists`
      );
      setSearchResult(response.data);
    } catch (error) {
      showToast("No Gist Found");
    } finally {
      setSearchLoading(false);
    }
  };
  const renderItem = ({ item, index }: {item: IUser,index:number}) => {
    //to format date
    let CDAte = new Date(item.created_at).toLocaleDateString("en-US");
    let UDAte = new Date(item.updated_at).toLocaleDateString("en-US");

    let files = Object.entries(item.files);
    let fileArray: any[] = [];
    let fileLength = files.map((key) => {
      fileArray.push(key[0]);
    });
    //make memoized component to prevent re-renders even when the data have not changed. 
    return (
      <MemoizedUserGistView
        index={index?.toString()}
        imagePath={item.owner.avatar_url}
        userName={item.owner.login}
        createdAt={"Created at: " + CDAte}
        updatedAt={"  Updated at: " + UDAte}
        desc={item.description}
        fileLength={fileLength.length || 0}
        fileArray={fileArray} 
        />
    );
  };

  if (loading) {
    return <Loader />;
  }
  
  return (
    <View style={styles.container}>
      <Header
        onChange={(text:string) => {
          setSearchText(text);
          handler(text);
        }}
        value={serachText}
        isLoading={searchLoading}
      />
      <View style={styles.body}>
        <FlatList
          data={serachText ? serachResult : reduxGistData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item: { item: IUser },index:{index: number;}) => renderItem(item, index)}
          initialNumToRender={7}
          maxToRenderPerBatch={10}
          removeClippedSubviews={true}
          // ListEmptyComponent={() => {
          //   <View>
          //     <Text style={styles.emptyText}>No Gist Found</Text>
          //   </View>;
          // }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  body: {
    paddingHorizontal: moderateScale(15),
  },
  emptyText: {
    fontWeight: "500",
    color: color.text,
    fontSize: moderateScale(14),
  },
});
