import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import FailurePage from "./FailurePage";
import SuccessPage from "./SuccessPage";


function ResultsPage(props) {
   // parse the results into a JSON object and use it according to your useCase
   let results = props.route.params; // parse the response here
  return (
    <SafeAreaView style={styles.container}>
        {results.response.status == 'auto_approved'? 
        // handle the success case 
          <SuccessPage title = {"Workflow Successful"} resultsObject = {results.response}/>:
        // handle the failed cases
          (results.response.status == 'user_cancelled'? 
            <FailurePage errorMessage = {results.response.errorMessage} title={"WorkFlow Cancelled By User"}/> :
            <FailurePage errorMessage = {results.response.errorMessage} title={"WorkFlow failed"}/>)
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
