import { keyCodes } from "./Constants";

export const onReturn = (
  event: React.KeyboardEvent,
  actionMethod: () => void
) => {
  if (event.keyCode === keyCodes.returnKey) actionMethod();
};
