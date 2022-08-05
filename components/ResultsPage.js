import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import FailurePage from "./FailurePage";
import SuccessPage from "./SuccessPage";



  return (
    <SafeAreaView style={styles.container}>
        {results.response.status == 'success'? 
        // handle the success case 
          <SuccessPage title = {"Workflow Successful"} resultsObject = {results.response}/>:
        // handle the failed cases
          (results.response.status == 'cancelled'? 
            <FailurePage errorMessage = {results.reason} title={"WorkFlow Cancelled By User"}/> :
            <FailurePage errorMessage = {results.reason} title={"WorkFlow failed"}/>)
        }
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    flex: 1,
  }
});

export default ResultsPage;
