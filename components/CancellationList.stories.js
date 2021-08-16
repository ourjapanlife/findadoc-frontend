import CancellationList from "./CancellationList.vue";

import dataFixture from "../fixtures/cancellationsFixture.json";

export default {
  component: CancellationList,
  title: "Cancellation List",
  argTypes: {
    dataOptions: {
      options: ["with data", "no data"],
      control: { type: "radio" },
    },
  },
};

export const Template = (args) => {
  const { dataOptions } = args;

  const overrideData = dataOptions === "withData" ? dataFixture.data : [];

  return {
    components: { CancellationList },
    props: {
      overrideData: overrideData,
    },
    template: `<div v-bind="$props" />`,
  };
};
