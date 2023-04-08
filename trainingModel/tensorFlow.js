const tf = require("@tensorflow/tfjs-node");
const csv = require("csv-parser");
const fs = require("fs");
function loadData() {
  const data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream("./train.csv")

      .pipe(csv())
      .on("data", (row) => {
        // Convert row values to numeric arrays
        const input = Object.values(row).slice(2, 8).map(parseFloat);
        console.log("🚀 ~ .on ~ output:", input);
        data.push({ input, output });
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}
// Load the patient data
const run = async () => {
  const data = await loadData();
  console.log("🚀 ~ data:", data);
  // Pre-process the data
  const features = [
    "Age",
    "SBP",
    "HBP",
    "heart_rate",
    "Glucose",
    "SpO2",
    "Temprature",
  ];
  const target = "outcome";

  const x = data.map((patient) => features.map((feature) => patient[feature]));
  const y = data.map((patient) => patient[target]);

  // Split the data into training and testing sets
  const trainSize = Math.floor(x.length * 0.8);
  const testSize = x.length - trainSize;

  const trainX = tf.tensor2d(x.slice(0, trainSize));
  const trainY = tf.tensor1d(y.slice(0, trainSize));

  const testX = tf.tensor2d(x.slice(trainSize));
  const testY = tf.tensor1d(y.slice(trainSize));

  // Define the model architecture
  const model = tf.sequential();
  model.add(
    tf.layers.dense({ inputShape: [7], units: 64, activation: "relu" })
  );
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

  // Compile the model
  model.compile({
    loss: "binaryCrossentropy",
    optimizer: "adam",
    metrics: ["accuracy"],
  });

  // Train the model
  model
    .fit(trainX, trainY, {
      epochs: 10,
      batch_size: 32,
      validationData: [testX, testY],
    })
    .then((history) => {
      console.log(history.history);

      // Evaluate the model
      model.evaluate(testX, testY).then((result) => {
        console.log(result);
      });

      // Make predictions
      const newPatient = tf.tensor2d([[60, 140, 90, 80, 120, 98, 37]]);
      const prediction = model.predict(newPatient).dataSync();
      console.log(prediction);
    });
};

run();
