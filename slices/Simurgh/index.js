/**
 * @typedef {import("@prismicio/client").Content.SimurghSlice} SimurghSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SimurghSlice>} SimurghProps
 * @type {import("react").FC<SimurghProps>}
 */
const Simurgh = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for simurgh (variation: {slice.variation}) Slices
    </section>
  );
};

export default Simurgh;
