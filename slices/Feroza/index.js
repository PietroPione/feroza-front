/**
 * @typedef {import("@prismicio/client").Content.FerozaSlice} FerozaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FerozaSlice>} FerozaProps
 * @type {import("react").FC<FerozaProps>}
 */
const Feroza = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feroza (variation: {slice.variation}) Slices
    </section>
  );
};

export default Feroza;
