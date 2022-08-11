import React from "react";
import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import { DataTable } from "react-native-paper";

function SuccessPage(props) {
  let results = props.resultsObject;

  
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
          <DataTable.Cell>  Status </DataTable.Cell>
          <DataTable.Cell> {results.status}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
        <Text>  Transaction ID </Text>
         <Text>{results.transactionId}</Text>
        </DataTable.Row>
      </DataTable>

  

  

   {/* Handle all the Details data  */}
      <Text style={styles.tableTitle}> Details  :-</Text>
      <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title> Property </DataTable.Title>
          <DataTable.Title> Value</DataTable.Title>
        </DataTable.Header>
      { Object.entries(results.details).map(([key, value]) => {
       return  <DataTable style={styles.container} >
    <View>
    
    <DataTable.Row>
    <DataTable.Cell> {key}</DataTable.Cell>
                <DataTable.Cell> {value} </DataTable.Cell>
                </DataTable.Row>   
         
        </View>
        </DataTable>
        
   })}

       
       

  
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
