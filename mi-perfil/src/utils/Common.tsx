import { keyCodes } from "./Constants";

export const onReturn = (
  event: React.KeyboardEvent,
  actionMethod: () => void
) => {
  console.log("return", event.keyCode);

  if (event.keyCode === keyCodes.returnKey) {
    console.log("return 13", event.keyCode, actionMethod);
    actionMethod();
  }
};
