"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BodyDiseases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BodyDiseases.init(
    {
      prediction1: DataTypes.STRING,
      prediction2: DataTypes.STRING,
      prediction3: DataTypes.STRING,
      abdominal_pain: DataTypes.INTEGER,
      abnormal_menstruation: DataTypes.INTEGER,
      acidity: DataTypes.INTEGER,
      acute_liver_failure: DataTypes.INTEGER,
      altered_sensorium: DataTypes.INTEGER,
      anxiety: DataTypes.INTEGER,
      back_pain: DataTypes.INTEGER,
      belly_pain: DataTypes.INTEGER,
      blackheads: DataTypes.INTEGER,
      bladder_discomfort: DataTypes.INTEGER,
      blister: DataTypes.INTEGER,
      blood_in_sputum: DataTypes.INTEGER,
      bloody_stool: DataTypes.INTEGER,
      blurred_and_distorted_vision: DataTypes.INTEGER,
      breathlessness: DataTypes.INTEGER,
      brittle_nails: DataTypes.INTEGER,
      bruising: DataTypes.INTEGER,
      burning_micturition: DataTypes.INTEGER,
      chest_pain: DataTypes.INTEGER,
      chills: DataTypes.INTEGER,
      cold_hands_and_feets: DataTypes.INTEGER,
      coma: DataTypes.INTEGER,
      congestion: DataTypes.INTEGER,
      constipation: DataTypes.INTEGER,
      continuous_feel_of_urine: DataTypes.INTEGER,
      continuous_sneezing: DataTypes.INTEGER,
      cough: DataTypes.INTEGER,
      cramps: DataTypes.INTEGER,
      dark_urine: DataTypes.INTEGER,
      dehydration: DataTypes.INTEGER,
      depression: DataTypes.INTEGER,
      diarrhoea: DataTypes.INTEGER,
      dischromic_patches: DataTypes.INTEGER,
      distention_of_abdomen: DataTypes.INTEGER,
      dizziness: DataTypes.INTEGER,
      drying_and_tingling_lips: DataTypes.INTEGER,
      enlarged_thyroid: DataTypes.INTEGER,
      excessive_hunger: DataTypes.INTEGER,
      extra_marital_contacts: DataTypes.INTEGER,
      family_history: DataTypes.INTEGER,
      fast_heart_rate: DataTypes.INTEGER,
      fatigue: DataTypes.INTEGER,
      fluid_overload: DataTypes.INTEGER,
      foul_smell_ofurine: DataTypes.INTEGER,
      headache: DataTypes.INTEGER,
      high_fever: DataTypes.INTEGER,
      hip_joint_pain: DataTypes.INTEGER,
      history_of_alcohol_consumption: DataTypes.INTEGER,
      increased_appetite: DataTypes.INTEGER,
      indigestion: DataTypes.INTEGER,
      inflammatory_nails: DataTypes.INTEGER,
      internal_itching: DataTypes.INTEGER,
      irregular_sugar_level: DataTypes.INTEGER,
      irritability: DataTypes.INTEGER,
      irritation_in_anus: DataTypes.INTEGER,
      itching: DataTypes.INTEGER,
      joint_pain: DataTypes.INTEGER,
      knee_pain: DataTypes.INTEGER,
      lack_of_concentration: DataTypes.INTEGER,
      lethargy: DataTypes.INTEGER,
      loss_of_appetite: DataTypes.INTEGER,
      loss_of_balance: DataTypes.INTEGER,
      loss_of_smell: DataTypes.INTEGER,
      malaise: DataTypes.INTEGER,
      mild_fever: DataTypes.INTEGER,
      mood_swings: DataTypes.INTEGER,
      movement_stiffness: DataTypes.INTEGER,
      mucoid_sputum: DataTypes.INTEGER,
      muscle_pain: DataTypes.INTEGER,
      muscle_wasting: DataTypes.INTEGER,
      muscle_weakness: DataTypes.INTEGER,
      nausea: DataTypes.INTEGER,
      neck_pain: DataTypes.INTEGER,
      nodal_skin_eruptions: DataTypes.INTEGER,
      obesity: DataTypes.INTEGER,
      pain_behind_the_eyes: DataTypes.INTEGER,
      pain_during_bowel_movements: DataTypes.INTEGER,
      pain_in_anal_region: DataTypes.INTEGER,
      painful_walking: DataTypes.INTEGER,
      palpitations: DataTypes.INTEGER,
      passage_of_gases: DataTypes.INTEGER,
      patches_in_throat: DataTypes.INTEGER,
      phlegm: DataTypes.INTEGER,
      polyuria: DataTypes.INTEGER,
      prominent_veins_on_calf: DataTypes.INTEGER,
      puffy_face_and_eyes: DataTypes.INTEGER,
      pus_filled_pimples: DataTypes.INTEGER,
      receiving_blood_transfusion: DataTypes.INTEGER,
      receiving_unsterile_injections: DataTypes.INTEGER,
      red_sore_around_nose: DataTypes.INTEGER,
      red_spots_over_body: DataTypes.INTEGER,
      redness_of_eyes: DataTypes.INTEGER,
      restlessness: DataTypes.INTEGER,
      runny_nose: DataTypes.INTEGER,
      rusty_sputum: DataTypes.INTEGER,
      scurring: DataTypes.INTEGER,
      shivering: DataTypes.INTEGER,
      silver_like_dusting: DataTypes.INTEGER,
      sinus_pressure: DataTypes.INTEGER,
      skin_peeling: DataTypes.INTEGER,
      skin_rash: DataTypes.INTEGER,
      slurred_speech: DataTypes.INTEGER,
      small_dents_in_nails: DataTypes.INTEGER,
      spinning_movements: DataTypes.INTEGER,
      spotting_urination: DataTypes.INTEGER,
      stiff_neck: DataTypes.INTEGER,
      stomach_bleeding: DataTypes.INTEGER,
      stomach_pain: DataTypes.INTEGER,
      sunken_eyes: DataTypes.INTEGER,
      sweating: DataTypes.INTEGER,
      swelled_lymph_nodes: DataTypes.INTEGER,
      swelling_joints: DataTypes.INTEGER,
      swelling_of_stomach: DataTypes.INTEGER,
      swollen_blood_vessels: DataTypes.INTEGER,
      swollen_extremeties: DataTypes.INTEGER,
      swollen_legs: DataTypes.INTEGER,
      throat_irritation: DataTypes.INTEGER,
      toxic_look_typhos: DataTypes.INTEGER,
      ulcers_on_tongue: DataTypes.INTEGER,
      unsteadiness: DataTypes.INTEGER,
      visual_disturbances: DataTypes.INTEGER,
      vomiting: DataTypes.INTEGER,
      watering_from_eyes: DataTypes.INTEGER,
      weakness_in_limbs: DataTypes.INTEGER,
      weakness_of_one_body_side: DataTypes.INTEGER,
      weight_gain: DataTypes.INTEGER,
      weight_loss: DataTypes.INTEGER,
      yellow_crust_ooze: DataTypes.INTEGER,
      yellow_urine: DataTypes.INTEGER,
      yellowing_of_eyes: DataTypes.INTEGER,
      yellowish_skin: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BodyDiseases",
    }
  );
  return BodyDiseases;
};
