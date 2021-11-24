export default class RequestModel {
  // TODO: make real program code
  programCode: string;

  // allows to access attribute using brackets, e.g. request['address']
  // [index: string]: any;
  // 1- personal properties
  name: string;

  address: string;

  zipcode: string;

  email: string;

  phone: string;

  dob: Date; // date of birth

  reference: string; // how did you hear about us?

  // 2- health details properties
  weakImuneSystem: string; // Do you have weakened Immune System?

  chronicIllness: string; // Do you have Chronic Illness?

  livingAlone: string; // Do you live alone with limited support network?

  sickWithCovid: string; // Are you currently sick or with Covid-19 symptoms?

  beneficiariesText: string;

  // 3- program details
  vaccination: boolean;

  wellnessCalls: boolean;

  groceryDelivery: boolean;

  cannedAndPackagedGoods: { checked: boolean; value: string };

  freezerOrRefrigeratedGoods: { checked: boolean; value: string };

  fruitsAndVegetables: { checked: boolean; value: string };

  dairyAndEggs: { checked: boolean; value: string };

  meat: { checked: boolean; value: string };

  bread: { checked: boolean; value: string };

  yougurtTeaOrCoffee: { checked: boolean; value: string };

  miscellaneous: string;

  // constructor methode
  constructor(request: {
    programCode: string;

    name: string;
    address: string;
    zipcode: string; // zip code can contain letters
    email: string;
    phone: string;
    dob: Date; // date of birth
    reference: string; // how did you hear about us?

    // health details properties
    weakImuneSystem: string;
    chronicIllness: string;
    livingAlone: string;
    sickWithCovid: string;
    beneficiariesText: string;

    // program details
    vaccination: boolean;
    wellnessCalls: boolean;
    groceryDelivery: boolean;

    cannedAndPackagedGoods: { checked: boolean; value: string };
    freezerOrRefrigeratedGoods: { checked: boolean; value: string };
    fruitsAndVegetables: { checked: boolean; value: string };
    dairyAndEggs: { checked: boolean; value: string };
    meat: { checked: boolean; value: string };
    bread: { checked: boolean; value: string };
    yougurtTeaOrCoffee: { checked: boolean; value: string };
    miscellaneous: string;
  }) {
    this.programCode = request.programCode;

    this.name = request.name;
    this.address = request.address;
    this.zipcode = request.zipcode;
    this.email = request.email;
    this.phone = request.phone;
    this.dob = request.dob; // date of birth
    this.reference = request.reference;

    // health details properties
    this.weakImuneSystem = request.weakImuneSystem;
    this.chronicIllness = request.chronicIllness;
    this.livingAlone = request.livingAlone;
    this.sickWithCovid = request.sickWithCovid;
    this.beneficiariesText = request.beneficiariesText;

    // program details
    this.vaccination = request.vaccination;
    this.wellnessCalls = request.wellnessCalls;
    this.groceryDelivery = request.groceryDelivery;

    this.cannedAndPackagedGoods = request.cannedAndPackagedGoods;
    this.freezerOrRefrigeratedGoods = request.freezerOrRefrigeratedGoods;
    this.fruitsAndVegetables = request.fruitsAndVegetables;
    this.dairyAndEggs = request.dairyAndEggs;
    this.meat = request.meat;
    this.bread = request.bread;
    this.yougurtTeaOrCoffee = request.yougurtTeaOrCoffee;
    this.miscellaneous = request.miscellaneous;
  }
}
