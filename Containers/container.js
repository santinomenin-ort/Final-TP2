import Controller from "../Controllers/Controller.js";
import Service from "../Service/Service.js";

const service = new Service();

const controller = new Controller(service);

export default controller;