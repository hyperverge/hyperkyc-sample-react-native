import React from "react";
import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import { DataTable } from "react-native-paper";

function SuccessPage(props) {
  let results = props.resultsObject;
  console.log(results.hyperKycData.faceResult.faceData)
  
  return (
    <ScrollView>
      <Text style={styles.successTitle}> {props.title} </Text>

      {/* MARK: handle overall results */}
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title> Property </DataTable.Title>
          <DataTable.Title> Value</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>  Country Name </DataTable.Cell>
          <DataTable.Cell> {results.hyperKycData.countryResult.name} </DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      {/* Handle Face data */}

      <Text style={styles.tableTitle}> Face Data :-</Text>

      {/* TODO: Add the face image to be displayed */}
      {/* <Image source={require(result.faceData.fullFaceImagePath)} /> */}

      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Property</DataTable.Title>
          <DataTable.Title> Value</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Action </DataTable.Cell>
          <DataTable.Cell>
            {results.hyperKycData.faceResult.faceData.action}
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <Text>Full Image Filepath </Text>
          <Text>
            {results.hyperKycData.faceResult.faceData.fullFaceImagePath}
          </Text>
        </DataTable.Row>
        <DataTable.Row>
          <Text>Cropped Image Filepath </Text>
          <Text>
            {results.hyperKycData.faceResult.faceData.croppedFaceImagePath}
          </Text>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Video File URL</DataTable.Cell>
          <DataTable.Cell>
            {results.hyperKycData.faceResult.faceData.videoPath}
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      {/* Handle Documents Data */}
      <Text style={styles.tableTitle}> Documents Data :-</Text>
      {results.hyperKycData.docResultList.map((element, index) => (
        <View>
          <Text style={styles.tableSubTitle}>
            {" "}
            {++index + ") "} {element.tag + ": " + element.documentId}{" "}
          </Text>

          {/* Handle all the document data  */}
          {element.docDataList.map((element) => (

            // TODO: Add document Image from file path here 
            // <add here>

            <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title> Property </DataTable.Title>
                <DataTable.Title> Value</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell> Document Side </DataTable.Cell>
                <DataTable.Cell> {element.side} </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell> Document Action </DataTable.Cell>
                <DataTable.Cell> {element.action} </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell> Document path </DataTable.Cell>
                <Text> {element.docImagePath} </Text>
              </DataTable.Row>
              
            </DataTable>
          ))}
        </View>
      ))}

            {/* Handle API Data */}
      <Text style={styles.tableTitle}> Generic API Data :-</Text>
      {results.hyperKycData.apiResultList.map((element, index) => (
        
        <View>
          <Text style={styles.tableSubTitle}>
          {++index + ") "} {element.tag}{" "}
          </Text>


          {/* Handle all the API data  */}
        

              <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title> Property </DataTable.Title>
                <DataTable.Title> Value</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <Text> Response Code  </Text>
                <Text> {element.apiData.responseCode} </Text>
              </DataTable.Row>
              <DataTable.Row>
              <View style={styles.view}>
              <Text> Response Headers  </Text>
                <Text> {JSON.stringify(element.apiData.responseHeaders)} </Text>
                </View>
              </DataTable.Row>
              <DataTable.Row>
                <View style={styles.view}>
                <Text> Response Body  </Text>
                <Text> {JSON.stringify(element.apiData.responseBodyRaw)} </Text>
                </View>
              </DataTable.Row>

              </DataTable>
         
     
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  successTitle: {
    fontSize: 32,
    color: "green",
  },
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  view: {
      justifyContent: 'center'
  },
  tableTitle: {
    fontSize: 26,
  },
  tableSubTitle: {
    color: "#7B7B32",
    paddingTop: 10,
    fontSize: 22,
  },
});

export default SuccessPage;
