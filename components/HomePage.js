import React from "react";
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
// const { Hyperkyc } = NativeModules;
const { Hyperkyc } = NativeModules

function HomePage(props) {

  // MARK: HyperKYC integration starts here
  // TODO: Add the appID provided by HyperVerge here 
  let appID = ""

  // TODO: Add the appKey provided by Hyperverge here
  let appKey = ""

  // The transactionId is a unique id that has to be used when the SDK tries to create an user session for every KYC flow.
  // This can be generated using any random string generation mechanism
  let transactionId = generateUUID();   // generating a random ID universally unique 


  // Create a workflow config dictionary in order to launch the HyperKYC SDK from react-native
  var configDictionary = {};
  configDictionary["appId"] = appID;
  configDictionary["appKey"] = appKey;
  configDictionary["transactionId"] = transactionId;  // mandatory property

  
  var inputsDictionary = {};
  inputsDictionary["bvnNumber"] = "number-123"
  inputsDictionary["image"] = "image-path"

  
  configDictionary["inputs"] = inputsDictionary
  
  configDictionary["workflowId"] = "workflow_id"
  

  // Launch HyperKYC on buttonClick and handle the results in - ResultsPage
  const startHyperKYC = () => {
    // Launch HyperKyc using launch() function

    Hyperkyc.launch(configDictionary, function (response) {
    
      // handle the results obtained from HyperKYC
      // refer to result handling in ./component/ResultsPage.js file
      props.navigation.navigate('Results', {
        response
      })
    });
    
  };

  return (
    // Building HomePage UI
    <SafeAreaView style={styles.container}>
      <Text style={styles.homePageTitle}> HyperKYC Demo App </Text>
      <View style={styles.buttoncontainer}>
        {/* This text is being used as a button to trigger the HyperKYC flow */}
        <Text onPress={startHyperKYC} style={styles.button}>
          Start Onboarding
        </Text>
      </View>
    </SafeAreaView>
  );
}

// Styling for UI Components
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "center",
  },
  homePageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    color: "#fff",
    padding: 20,
    paddingHorizontal: 40,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: "#008dd8",
  },
  buttoncontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
});


// universally unique string generator to be used for Transaction ID
function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = Math.random() * 16; //random number between 0 and 16
      if (d > 0) {
        //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
}

export default HomePage;

