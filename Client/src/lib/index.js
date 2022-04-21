import abi from "../utils/ProductDetection.json";
const contractAddress = "0x8E28ED6fc84fD281a8850B1F080D400047Dd780f";
const contractABI = abi.abi;
export { contractABI, contractAddress };
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
};
export { options };
