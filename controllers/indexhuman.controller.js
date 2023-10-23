const catchAsync = require("../middlewares/async");
const { BodyIndexData, BodyDiseases, Sequelize } = require("../models");
const ApiError = require("../utils/ApiError");
const moment = require("moment");
const axios = require("axios");

exports.createBodyIndexData = catchAsync(async (req, res) => {
  // const userId = req.user.id;
  const {
    DBP,
    SBP,
    Glucose,
    SpO2,
    Temperature,
    timeMessure,
    heart_rate,
    userId,
  } = req.body;

  if (
    !(
      DBP ||
      SBP ||
      Glucose ||
      SpO2 ||
      Temperature ||
      timeMessure ||
      heart_rate ||
      userId
    )
  ) {
    throw new ApiError(500, "Something is missing");
  }
  const { data: predict } = await axios.post(
    `https://telemec-ai-0492392b1017.herokuapp.com/advisor`,
    {
      DBP,
      SBP,
      Glucose,
      SpO2,
      Temperature,
      timeMessure,
      heart_rate,
      TemperatureInF: 1.8 * Temperature + 32,
    }
  );
  const newValue = {
    DBP,
    SBP,
    Glucose,
    SpO2,
    Temperature,
    timeMessure,
    heart_rate,
    userId,
    TemperatureInF: 1.8 * Temperature + 32,
    health_status1: predict.nb_result,
    health_status2: predict.rf_result,
    health_status3: predict.svm_result,
  };
  const data = await BodyIndexData.create(newValue);
  res.send(data);
});
exports.getBodyIndexData = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const numberOfDay = 30;
  const startDate = moment()
    .subtract(numberOfDay - 1, "days")
    .startOf("day");
  const endDate = moment().add(1, "days").endOf("day");
  const bodyData = await BodyIndexData.findAll({
    where: {
      userId,
      createdAt: {
        [Sequelize.Op.between]: [startDate.toDate(), endDate.toDate()],
      },
    },
    raw: true,
  });
  const result = [];
  for (let i = 0; i < numberOfDay; i++) {
    const date = moment(startDate).add(i, "days").format("DD/MM/YYYY");
    const body = bodyData.find(
      (b) => moment(b.createdAt).format("DD/MM/YYYY") === date
    );
    result.push({
      DBP: 84,
      SBP: 145,
      Glucose: 98,
      SpO2: 92,
      Temperature: 37.4,
      TemperatureInF: 96.8,
      heart_rate: 80,
      ...body,
      Date: date,
    });
  }

  res.send(result);
});
exports.createBodyIndexData2 = catchAsync(async (req, res) => {
  let {
    DBP,
    SBP,
    Glucose,
    SpO2,
    Temperature,
    HeartRate: heart_rate,
    userId,
  } = req.query;

  if (!(DBP || SBP || Glucose || SpO2 || Temperature || heart_rate || userId)) {
    throw new ApiError(500, "Something is missing");
  }

  DBP = +DBP;
  SBP = +SBP;
  Glucose = +Glucose;
  SpO2 = +SpO2;
  Temperature = +Temperature;
  heart_rate = +heart_rate;
  Temperature = +Temperature;

  const { data: predict } = await axios.post(
    `https://telemec-ai-0492392b1017.herokuapp.com/advisor`,
    {
      DBP,
      SBP,
      Glucose,
      SpO2,
      Temperature,
      heart_rate,
      TemperatureInF: 1.8 * Temperature + 32,
    }
  );
  const newValue = {
    DBP,
    SBP,
    Glucose,
    SpO2,
    Temperature,
    timeMessure: moment(),
    heart_rate,
    userId,
    TemperatureInF: 1.8 * Temperature + 32,
    health_status1: predict.nb_result,
    health_status2: predict.rf_result,
    health_status3: predict.svm_result,
  };
  const data = await BodyIndexData.create(newValue);
  res.send(data);
});
exports.getBodyIndexDataTable = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const bodyData = await BodyIndexData.findAll({
    where: {
      userId,
    },
    raw: true,
  });
  res.send(bodyData);
});
exports.getBodyIndexDataTableById = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const bodyData = await BodyIndexData.findOne({
    where: {
      userId,
      id,
    },
    raw: true,
  });
  res.send(bodyData);
});
exports.createBodyDiseases = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const {
    abdominal_pain,
    abnormal_menstruation,
    acidity,
    acute_liver_failure,
    altered_sensorium,
    anxiety,
    back_pain,
    belly_pain,
    blackheads,
    bladder_discomfort,
    blister,
    blood_in_sputum,
    bloody_stool,
    blurred_and_distorted_vision,
    breathlessness,
    brittle_nails,
    bruising,
    burning_micturition,
    chest_pain,
    chills,
    cold_hands_and_feets,
    coma,
    congestion,
    constipation,
    continuous_feel_of_urine,
    continuous_sneezing,
    cough,
    cramps,
    dark_urine,
    dehydration,
    depression,
    diarrhoea,
    dischromic_patches,
    distention_of_abdomen,
    dizziness,
    drying_and_tingling_lips,
    enlarged_thyroid,
    excessive_hunger,
    extra_marital_contacts,
    family_history,
    fast_heart_rate,
    fatigue,
    fluid_overload,
    foul_smell_ofurine,
    headache,
    high_fever,
    hip_joint_pain,
    history_of_alcohol_consumption,
    increased_appetite,
    indigestion,
    inflammatory_nails,
    internal_itching,
    irregular_sugar_level,
    irritability,
    irritation_in_anus,
    itching,
    joint_pain,
    knee_pain,
    lack_of_concentration,
    lethargy,
    loss_of_appetite,
    loss_of_balance,
    loss_of_smell,
    malaise,
    mild_fever,
    mood_swings,
    movement_stiffness,
    mucoid_sputum,
    muscle_pain,
    muscle_wasting,
    muscle_weakness,
    nausea,
    neck_pain,
    nodal_skin_eruptions,
    obesity,
    pain_behind_the_eyes,
    pain_during_bowel_movements,
    pain_in_anal_region,
    painful_walking,
    palpitations,
    passage_of_gases,
    patches_in_throat,
    phlegm,
    polyuria,
    prominent_veins_on_calf,
    puffy_face_and_eyes,
    pus_filled_pimples,
    receiving_blood_transfusion,
    receiving_unsterile_injections,
    red_sore_around_nose,
    red_spots_over_body,
    redness_of_eyes,
    restlessness,
    runny_nose,
    rusty_sputum,
    scurring,
    shivering,
    silver_like_dusting,
    sinus_pressure,
    skin_peeling,
    skin_rash,
    slurred_speech,
    small_dents_in_nails,
    spinning_movements,
    spotting_urination,
    stiff_neck,
    stomach_bleeding,
    stomach_pain,
    sunken_eyes,
    sweating,
    swelled_lymph_nodes,
    swelling_joints,
    swelling_of_stomach,
    swollen_blood_vessels,
    swollen_extremeties,
    swollen_legs,
    throat_irritation,
    toxic_look_typhos,
    ulcers_on_tongue,
    unsteadiness,
    visual_disturbances,
    vomiting,
    watering_from_eyes,
    weakness_in_limbs,
    weakness_of_one_body_side,
    weight_gain,
    weight_loss,
    yellow_crust_ooze,
    yellow_urine,
    yellowing_of_eyes,
    yellowish_skin,
  } = req.body;

  // if (
  //   !(
  //     abdominal_pain ||
  //     abnormal_menstruation ||
  //     acidity ||
  //     acute_liver_failure ||
  //     altered_sensorium ||
  //     anxiety ||
  //     back_pain ||
  //     belly_pain ||
  //     blackheads ||
  //     bladder_discomfort ||
  //     blister ||
  //     blood_in_sputum ||
  //     bloody_stool ||
  //     blurred_and_distorted_vision ||
  //     breathlessness ||
  //     brittle_nails ||
  //     bruising ||
  //     burning_micturition ||
  //     chest_pain ||
  //     chills ||
  //     cold_hands_and_feets ||
  //     coma ||
  //     congestion ||
  //     constipation ||
  //     continuous_feel_of_urine ||
  //     continuous_sneezing ||
  //     cough ||
  //     cramps ||
  //     dark_urine ||
  //     dehydration ||
  //     depression ||
  //     diarrhoea ||
  //     dischromic_patches ||
  //     distention_of_abdomen ||
  //     dizziness ||
  //     drying_and_tingling_lips ||
  //     enlarged_thyroid ||
  //     excessive_hunger ||
  //     extra_marital_contacts ||
  //     family_history ||
  //     fast_heart_rate ||
  //     fatigue ||
  //     fluid_overload ||
  //     foul_smell_ofurine ||
  //     headache ||
  //     high_fever ||
  //     hip_joint_pain ||
  //     history_of_alcohol_consumption ||
  //     increased_appetite ||
  //     indigestion ||
  //     inflammatory_nails ||
  //     internal_itching ||
  //     irregular_sugar_level ||
  //     irritability ||
  //     irritation_in_anus ||
  //     itching ||
  //     joint_pain ||
  //     knee_pain ||
  //     lack_of_concentration ||
  //     lethargy ||
  //     loss_of_appetite ||
  //     loss_of_balance ||
  //     loss_of_smell ||
  //     malaise ||
  //     mild_fever ||
  //     mood_swings ||
  //     movement_stiffness ||
  //     mucoid_sputum ||
  //     muscle_pain ||
  //     muscle_wasting ||
  //     muscle_weakness ||
  //     nausea ||
  //     neck_pain ||
  //     nodal_skin_eruptions ||
  //     obesity ||
  //     pain_behind_the_eyes ||
  //     pain_during_bowel_movements ||
  //     pain_in_anal_region ||
  //     painful_walking ||
  //     palpitations ||
  //     passage_of_gases ||
  //     patches_in_throat ||
  //     phlegm ||
  //     polyuria ||
  //     prominent_veins_on_calf ||
  //     puffy_face_and_eyes ||
  //     pus_filled_pimples ||
  //     receiving_blood_transfusion ||
  //     receiving_unsterile_injections ||
  //     red_sore_around_nose ||
  //     red_spots_over_body ||
  //     redness_of_eyes ||
  //     restlessness ||
  //     runny_nose ||
  //     rusty_sputum ||
  //     scurring ||
  //     shivering ||
  //     silver_like_dusting ||
  //     sinus_pressure ||
  //     skin_peeling ||
  //     skin_rash ||
  //     slurred_speech ||
  //     small_dents_in_nails ||
  //     spinning_movements ||
  //     spotting_urination ||
  //     stiff_neck ||
  //     stomach_bleeding ||
  //     stomach_pain ||
  //     sunken_eyes ||
  //     sweating ||
  //     swelled_lymph_nodes ||
  //     swelling_joints ||
  //     swelling_of_stomach ||
  //     swollen_blood_vessels ||
  //     swollen_extremeties ||
  //     swollen_legs ||
  //     throat_irritation ||
  //     toxic_look_typhos ||
  //     ulcers_on_tongue ||
  //     unsteadiness ||
  //     visual_disturbances ||
  //     vomiting ||
  //     watering_from_eyes ||
  //     weakness_in_limbs ||
  //     weakness_of_one_body_side ||
  //     weight_gain ||
  //     weight_loss ||
  //     yellow_crust_ooze ||
  //     yellow_urine ||
  //     yellowing_of_eyes ||
  //     yellowish_skin
  //   )
  // ) {
  //   throw new ApiError(500, "Something is missing");
  // }

  const { data: predict } = await axios.post(
    `https://telemec-ai-0492392b1017.herokuapp.com/disease`,
    req.body
  );
  const data = await BodyDiseases.create({
    prediction1: predict.nb_result,
    prediction2: predict.rf_result,
    prediction3: predict.svm_result,
    abdominal_pain,
    abnormal_menstruation,
    acidity,
    acute_liver_failure,
    altered_sensorium,
    anxiety,
    back_pain,
    belly_pain,
    blackheads,
    bladder_discomfort,
    blister,
    blood_in_sputum,
    bloody_stool,
    blurred_and_distorted_vision,
    breathlessness,
    brittle_nails,
    bruising,
    burning_micturition,
    chest_pain,
    chills,
    cold_hands_and_feets,
    coma,
    congestion,
    constipation,
    continuous_feel_of_urine,
    continuous_sneezing,
    cough,
    cramps,
    dark_urine,
    dehydration,
    depression,
    diarrhoea,
    dischromic_patches,
    distention_of_abdomen,
    dizziness,
    drying_and_tingling_lips,
    enlarged_thyroid,
    excessive_hunger,
    extra_marital_contacts,
    family_history,
    fast_heart_rate,
    fatigue,
    fluid_overload,
    foul_smell_ofurine,
    headache,
    high_fever,
    hip_joint_pain,
    history_of_alcohol_consumption,
    increased_appetite,
    indigestion,
    inflammatory_nails,
    internal_itching,
    irregular_sugar_level,
    irritability,
    irritation_in_anus,
    itching,
    joint_pain,
    knee_pain,
    lack_of_concentration,
    lethargy,
    loss_of_appetite,
    loss_of_balance,
    loss_of_smell,
    malaise,
    mild_fever,
    mood_swings,
    movement_stiffness,
    mucoid_sputum,
    muscle_pain,
    muscle_wasting,
    muscle_weakness,
    nausea,
    neck_pain,
    nodal_skin_eruptions,
    obesity,
    pain_behind_the_eyes,
    pain_during_bowel_movements,
    pain_in_anal_region,
    painful_walking,
    palpitations,
    passage_of_gases,
    patches_in_throat,
    phlegm,
    polyuria,
    prominent_veins_on_calf,
    puffy_face_and_eyes,
    pus_filled_pimples,
    receiving_blood_transfusion,
    receiving_unsterile_injections,
    red_sore_around_nose,
    red_spots_over_body,
    redness_of_eyes,
    restlessness,
    runny_nose,
    rusty_sputum,
    scurring,
    shivering,
    silver_like_dusting,
    sinus_pressure,
    skin_peeling,
    skin_rash,
    slurred_speech,
    small_dents_in_nails,
    spinning_movements,
    spotting_urination,
    stiff_neck,
    stomach_bleeding,
    stomach_pain,
    sunken_eyes,
    sweating,
    swelled_lymph_nodes,
    swelling_joints,
    swelling_of_stomach,
    swollen_blood_vessels,
    swollen_extremeties,
    swollen_legs,
    throat_irritation,
    toxic_look_typhos,
    ulcers_on_tongue,
    unsteadiness,
    visual_disturbances,
    vomiting,
    watering_from_eyes,
    weakness_in_limbs,
    weakness_of_one_body_side,
    weight_gain,
    weight_loss,
    yellow_crust_ooze,
    yellow_urine,
    yellowing_of_eyes,
    yellowish_skin,
    userId,
  });
  res.send(data);
});
exports.getDiseases = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const data = await BodyDiseases.findAll({
    where: {
      userId,
    },
  });
  res.send(data);
});
exports.getDiseasesById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const data = await BodyDiseases.findOne({
    where: {
      userId,
      id,
    },
  });
  if (!data) {
    return res.send({});
  }
  res.send(data);
});

// npx sequelize-cli model:generate --name BodyDiseases --attributes prediction1:string,prediction2:string,prediction3:string,abdominal_pain:integer,abnormal_menstruation:integer,acidity:integer,acute_liver_failure:integer,altered_sensorium:integer,anxiety:integer,back_pain:integer,belly_pain:integer,blackheads:integer,bladder_discomfort:integer,blister:integer,blood_in_sputum:integer,bloody_stool:integer,blurred_and_distorted_vision:integer,breathlessness:integer,brittle_nails:integer,bruising:integer,burning_micturition:integer,chest_pain:integer,chills:integer,cold_hands_and_feets:integer,coma:integer,congestion:integer,constipation:integer,continuous_feel_of_urine:integer,continuous_sneezing:integer,cough:integer,cramps:integer,dark_urine:integer,dehydration:integer,depression:integer,diarrhoea:integer,dischromic_patches:integer,distention_of_abdomen:integer,dizziness:integer,drying_and_tingling_lips:integer,enlarged_thyroid:integer,excessive_hunger:integer,extra_marital_contacts:integer,family_history:integer,fast_heart_rate:integer,fatigue:integer,fluid_overload:integer,foul_smell_ofurine:integer,headache:integer,high_fever:integer,hip_joint_pain:integer,history_of_alcohol_consumption:integer,increased_appetite:integer,indigestion:integer,inflammatory_nails:integer,internal_itching:integer,irregular_sugar_level:integer,irritability:integer,irritation_in_anus:integer,itching:integer,joint_pain:integer,knee_pain:integer,lack_of_concentration:integer,lethargy:integer,loss_of_appetite:integer,loss_of_balance:integer,loss_of_smell:integer,malaise:integer,mild_fever:integer,mood_swings:integer,movement_stiffness:integer,mucoid_sputum:integer,muscle_pain:integer,muscle_wasting:integer,muscle_weakness:integer,nausea:integer,neck_pain:integer,nodal_skin_eruptions:integer,obesity:integer,pain_behind_the_eyes:integer,pain_during_bowel_movements:integer,pain_in_anal_region:integer,painful_walking:integer,palpitations:integer,passage_of_gases:integer,patches_in_throat:integer,phlegm:integer,polyuria:integer,prominent_veins_on_calf:integer,puffy_face_and_eyes:integer,pus_filled_pimples:integer,receiving_blood_transfusion:integer,receiving_unsterile_injections:integer,red_sore_around_nose:integer,red_spots_over_body:integer,redness_of_eyes:integer,restlessness:integer,runny_nose:integer,rusty_sputum:integer,scurring:integer,shivering:integer,silver_like_dusting:integer,sinus_pressure:integer,skin_peeling:integer,skin_rash:integer,slurred_speech:integer,small_dents_in_nails:integer,spinning_movements:integer,spotting_urination:integer,stiff_neck:integer,stomach_bleeding:integer,stomach_pain:integer,sunken_eyes:integer,sweating:integer,swelled_lymph_nodes:integer,swelling_joints:integer,swelling_of_stomach:integer,swollen_blood_vessels:integer,swollen_extremeties:integer,swollen_legs:integer,throat_irritation:integer,toxic_look_typhos:integer,ulcers_on_tongue:integer,unsteadiness:integer,visual_disturbances:integer,vomiting:integer,watering_from_eyes:integer,weakness_in_limbs:integer,weakness_of_one_body_side:integer,weight_gain:integer,weight_loss:integer,yellow_crust_ooze:integer,yellow_urine:integer,yellowing_of_eyes:integer,yellowish_skin:integer
