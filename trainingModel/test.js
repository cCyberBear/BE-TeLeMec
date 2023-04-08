// // Load the saved model
// const path = require("path");

// async function predict() {
//   const tf = require("@tensorflow/tfjs-node");

//   // Load the saved model
//   const modelPath = path.join(__dirname, "health_model");

//   const model = await tf.loadLayersModel(`file://${modelPath}/model.json`);

//   // Prepare the input data for prediction
//   const inputData = tf.tensor2d([[85, 150, 91, 126, 130, 96, 99]]);

//   // Make a prediction
//   const prediction = model.predict(inputData);
//   const output = prediction.dataSync();

//   // Print the predicted output
//   console.log(output);
// }

// predict();

const { RandomForestClassifier } = require("ml-random-forest");
const fs = require("fs");

// Load the model from the file
const modelJSON = fs.readFileSync("./RFCmodels/modelRFC.json", "utf-8");
const rfc = RandomForestClassifier.load(JSON.parse(modelJSON));
const inputValues = [[53, 129, 85, 102, 130, 99, 90]];
const prediction = rfc.predict(inputValues);
console.log(prediction);
