'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BodyDiseases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prediction1: {
        type: Sequelize.STRING
      },
      prediction2: {
        type: Sequelize.STRING
      },
      prediction3: {
        type: Sequelize.STRING
      },
      abdominal_pain: {
        type: Sequelize.INTEGER
      },
      abnormal_menstruation: {
        type: Sequelize.INTEGER
      },
      acidity: {
        type: Sequelize.INTEGER
      },
      acute_liver_failure: {
        type: Sequelize.INTEGER
      },
      altered_sensorium: {
        type: Sequelize.INTEGER
      },
      anxiety: {
        type: Sequelize.INTEGER
      },
      back_pain: {
        type: Sequelize.INTEGER
      },
      belly_pain: {
        type: Sequelize.INTEGER
      },
      blackheads: {
        type: Sequelize.INTEGER
      },
      bladder_discomfort: {
        type: Sequelize.INTEGER
      },
      blister: {
        type: Sequelize.INTEGER
      },
      blood_in_sputum: {
        type: Sequelize.INTEGER
      },
      bloody_stool: {
        type: Sequelize.INTEGER
      },
      blurred_and_distorted_vision: {
        type: Sequelize.INTEGER
      },
      breathlessness: {
        type: Sequelize.INTEGER
      },
      brittle_nails: {
        type: Sequelize.INTEGER
      },
      bruising: {
        type: Sequelize.INTEGER
      },
      burning_micturition: {
        type: Sequelize.INTEGER
      },
      chest_pain: {
        type: Sequelize.INTEGER
      },
      chills: {
        type: Sequelize.INTEGER
      },
      cold_hands_and_feets: {
        type: Sequelize.INTEGER
      },
      coma: {
        type: Sequelize.INTEGER
      },
      congestion: {
        type: Sequelize.INTEGER
      },
      constipation: {
        type: Sequelize.INTEGER
      },
      continuous_feel_of_urine: {
        type: Sequelize.INTEGER
      },
      continuous_sneezing: {
        type: Sequelize.INTEGER
      },
      cough: {
        type: Sequelize.INTEGER
      },
      cramps: {
        type: Sequelize.INTEGER
      },
      dark_urine: {
        type: Sequelize.INTEGER
      },
      dehydration: {
        type: Sequelize.INTEGER
      },
      depression: {
        type: Sequelize.INTEGER
      },
      diarrhoea: {
        type: Sequelize.INTEGER
      },
      dischromic_patches: {
        type: Sequelize.INTEGER
      },
      distention_of_abdomen: {
        type: Sequelize.INTEGER
      },
      dizziness: {
        type: Sequelize.INTEGER
      },
      drying_and_tingling_lips: {
        type: Sequelize.INTEGER
      },
      enlarged_thyroid: {
        type: Sequelize.INTEGER
      },
      excessive_hunger: {
        type: Sequelize.INTEGER
      },
      extra_marital_contacts: {
        type: Sequelize.INTEGER
      },
      family_history: {
        type: Sequelize.INTEGER
      },
      fast_heart_rate: {
        type: Sequelize.INTEGER
      },
      fatigue: {
        type: Sequelize.INTEGER
      },
      fluid_overload: {
        type: Sequelize.INTEGER
      },
      foul_smell_ofurine: {
        type: Sequelize.INTEGER
      },
      headache: {
        type: Sequelize.INTEGER
      },
      high_fever: {
        type: Sequelize.INTEGER
      },
      hip_joint_pain: {
        type: Sequelize.INTEGER
      },
      history_of_alcohol_consumption: {
        type: Sequelize.INTEGER
      },
      increased_appetite: {
        type: Sequelize.INTEGER
      },
      indigestion: {
        type: Sequelize.INTEGER
      },
      inflammatory_nails: {
        type: Sequelize.INTEGER
      },
      internal_itching: {
        type: Sequelize.INTEGER
      },
      irregular_sugar_level: {
        type: Sequelize.INTEGER
      },
      irritability: {
        type: Sequelize.INTEGER
      },
      irritation_in_anus: {
        type: Sequelize.INTEGER
      },
      itching: {
        type: Sequelize.INTEGER
      },
      joint_pain: {
        type: Sequelize.INTEGER
      },
      knee_pain: {
        type: Sequelize.INTEGER
      },
      lack_of_concentration: {
        type: Sequelize.INTEGER
      },
      lethargy: {
        type: Sequelize.INTEGER
      },
      loss_of_appetite: {
        type: Sequelize.INTEGER
      },
      loss_of_balance: {
        type: Sequelize.INTEGER
      },
      loss_of_smell: {
        type: Sequelize.INTEGER
      },
      malaise: {
        type: Sequelize.INTEGER
      },
      mild_fever: {
        type: Sequelize.INTEGER
      },
      mood_swings: {
        type: Sequelize.INTEGER
      },
      movement_stiffness: {
        type: Sequelize.INTEGER
      },
      mucoid_sputum: {
        type: Sequelize.INTEGER
      },
      muscle_pain: {
        type: Sequelize.INTEGER
      },
      muscle_wasting: {
        type: Sequelize.INTEGER
      },
      muscle_weakness: {
        type: Sequelize.INTEGER
      },
      nausea: {
        type: Sequelize.INTEGER
      },
      neck_pain: {
        type: Sequelize.INTEGER
      },
      nodal_skin_eruptions: {
        type: Sequelize.INTEGER
      },
      obesity: {
        type: Sequelize.INTEGER
      },
      pain_behind_the_eyes: {
        type: Sequelize.INTEGER
      },
      pain_during_bowel_movements: {
        type: Sequelize.INTEGER
      },
      pain_in_anal_region: {
        type: Sequelize.INTEGER
      },
      painful_walking: {
        type: Sequelize.INTEGER
      },
      palpitations: {
        type: Sequelize.INTEGER
      },
      passage_of_gases: {
        type: Sequelize.INTEGER
      },
      patches_in_throat: {
        type: Sequelize.INTEGER
      },
      phlegm: {
        type: Sequelize.INTEGER
      },
      polyuria: {
        type: Sequelize.INTEGER
      },
      prominent_veins_on_calf: {
        type: Sequelize.INTEGER
      },
      puffy_face_and_eyes: {
        type: Sequelize.INTEGER
      },
      pus_filled_pimples: {
        type: Sequelize.INTEGER
      },
      receiving_blood_transfusion: {
        type: Sequelize.INTEGER
      },
      receiving_unsterile_injections: {
        type: Sequelize.INTEGER
      },
      red_sore_around_nose: {
        type: Sequelize.INTEGER
      },
      red_spots_over_body: {
        type: Sequelize.INTEGER
      },
      redness_of_eyes: {
        type: Sequelize.INTEGER
      },
      restlessness: {
        type: Sequelize.INTEGER
      },
      runny_nose: {
        type: Sequelize.INTEGER
      },
      rusty_sputum: {
        type: Sequelize.INTEGER
      },
      scurring: {
        type: Sequelize.INTEGER
      },
      shivering: {
        type: Sequelize.INTEGER
      },
      silver_like_dusting: {
        type: Sequelize.INTEGER
      },
      sinus_pressure: {
        type: Sequelize.INTEGER
      },
      skin_peeling: {
        type: Sequelize.INTEGER
      },
      skin_rash: {
        type: Sequelize.INTEGER
      },
      slurred_speech: {
        type: Sequelize.INTEGER
      },
      small_dents_in_nails: {
        type: Sequelize.INTEGER
      },
      spinning_movements: {
        type: Sequelize.INTEGER
      },
      spotting_urination: {
        type: Sequelize.INTEGER
      },
      stiff_neck: {
        type: Sequelize.INTEGER
      },
      stomach_bleeding: {
        type: Sequelize.INTEGER
      },
      stomach_pain: {
        type: Sequelize.INTEGER
      },
      sunken_eyes: {
        type: Sequelize.INTEGER
      },
      sweating: {
        type: Sequelize.INTEGER
      },
      swelled_lymph_nodes: {
        type: Sequelize.INTEGER
      },
      swelling_joints: {
        type: Sequelize.INTEGER
      },
      swelling_of_stomach: {
        type: Sequelize.INTEGER
      },
      swollen_blood_vessels: {
        type: Sequelize.INTEGER
      },
      swollen_extremeties: {
        type: Sequelize.INTEGER
      },
      swollen_legs: {
        type: Sequelize.INTEGER
      },
      throat_irritation: {
        type: Sequelize.INTEGER
      },
      toxic_look_typhos: {
        type: Sequelize.INTEGER
      },
      ulcers_on_tongue: {
        type: Sequelize.INTEGER
      },
      unsteadiness: {
        type: Sequelize.INTEGER
      },
      visual_disturbances: {
        type: Sequelize.INTEGER
      },
      vomiting: {
        type: Sequelize.INTEGER
      },
      watering_from_eyes: {
        type: Sequelize.INTEGER
      },
      weakness_in_limbs: {
        type: Sequelize.INTEGER
      },
      weakness_of_one_body_side: {
        type: Sequelize.INTEGER
      },
      weight_gain: {
        type: Sequelize.INTEGER
      },
      weight_loss: {
        type: Sequelize.INTEGER
      },
      yellow_crust_ooze: {
        type: Sequelize.INTEGER
      },
      yellow_urine: {
        type: Sequelize.INTEGER
      },
      yellowing_of_eyes: {
        type: Sequelize.INTEGER
      },
      yellowish_skin: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BodyDiseases');
  }
};