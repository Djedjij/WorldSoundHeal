import IMask from "imask";
export const refTo = (ref: any) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};
