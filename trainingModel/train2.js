const csv = require("csv-parser");
const fs = require("fs");
const shuffleSeed = require("shuffle-seed");
const { RandomForestClassifier } = require("ml-random-forest");

function loadData() {
  const data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream("./train.csv")
      .pipe(csv())
      .on("data", (row) => {
        // Convert row values to numeric arrays
        const input = {
          Age: +row.Age,
          SBP: +row.SBP,
          HBP: +row.HBP,
          heart_rate: +row.heart_rate,
          Glucose: +row.Glucose,
          SpO2: +row.SpO2,
          Temprature: +row.Temprature,
          Health_status: +row.Health_status,
        };
        data.push(input);
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
  const dataset = await loadData();

  // Split the data into input (X) and output (y)
  const X = dataset.map((row) => Object.values(row).slice(0, -1));
  const y = dataset.map((row) => row.Health_status);

  // Set the random seed to ensure reproducibility
  const seed = 42;

  // Shuffle the data using the random seed
  const shuffledData = shuffleSeed.shuffle(dataset, seed);

  // Split the data into training and testing sets
  const splitIndex = Math.floor(shuffledData.length * 0.8);
  const X_train = shuffledData
    .slice(0, splitIndex)
    .map((row) => Object.values(row).slice(0, -1));
  const y_train = shuffledData
    .slice(0, splitIndex)
    .map((row) => row.Health_status);
  const X_test = shuffledData
    .slice(splitIndex)
    .map((row) => Object.values(row).slice(0, -1));
  const y_test = shuffledData.slice(splitIndex).map((row) => row.Health_status);

  // Load and preprocess data here...
  const rfc = new RandomForestClassifier();
  rfc.train(X_train, y_train);

  const inputColumns = [
    "Age",
    "SBP",
    "HBP",
    "heart_rate",
    "Glucose",
    "SpO2",
    "Temprature",
  ];
  const inputValues = [[53, 139, 85, 102, 130, 99, 110]];

  const prediction = rfc.predict(inputValues);
  fs.writeFileSync("./RFCmodels/modelRFC.json", JSON.stringify(rfc.toJSON()));
  console.log(prediction);
}

train();
