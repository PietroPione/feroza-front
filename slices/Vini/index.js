/**
 * @typedef {import("@prismicio/client").Content.ViniSlice} ViniSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ViniSlice>} ViniProps
 * @type {import("react").FC<ViniProps>}
 */
const Vini = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for vini (variation: {slice.variation}) Slices
    </section>
  );
};

export default Vini;
