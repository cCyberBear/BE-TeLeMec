const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");

// Define the shape of your input and output data
const inputShape = [7];
const outputShape = [1];

// Define the number of epochs and batch size for training
const numEpochs = 100;
const batchSize = 32;

// Create a function to load and preprocess your data
function loadData() {
  const data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream("./train.csv")
      .pipe(csv())
      .on("data", (row) => {
        // Convert row values to numeric arrays
        const input = Object.values(row).slice(2, 9).map(parseFloat);
        const output = [parseInt(row.Health_status) - 1]; // Subtract 1 to convert to 0-based index
        console.log("🚀 ~ .on ~ output:", output);
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

async function train() {
  // Load and preprocess the data
  const data = await loadData();
  const xs = data.map((d) => d.input);
  const ys = data.map((d) => d.output);

  // Convert the data to TensorFlow tensors
  const xData = tf.tensor(xs, [xs.length, ...inputShape]);
  const yData = tf.tensor(ys, [ys.length, ...outputShape]);

  // Define the model architecture
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 32, activation: "relu", inputShape }));
  model.add(tf.layers.dense({ units: 16, activation: "relu" }));
  model.add(tf.layers.dense({ units: 8, activation: "relu" }));
  model.add(tf.layers.dense({ units: 5, activation: "softmax" }));

  // Compile the model
  model.compile({
    optimizer: "adam",
    loss: "sparseCategoricalCrossentropy",
    metrics: ["accuracy"],
  });

  // Train the model
  await model.fit(xData, yData, {
    epochs: numEpochs,
    batchSize,
    validationSplit: 0.2,
  });

  // Save the model
  const modelPath = path.join(__dirname, "health_model");
  try {
    await model.save(`file://${modelPath}`);
  } catch (error) {
    console.log("🚀 ~ train ~ error:", error);
  }

  console.log("Training complete!");
}

train();
