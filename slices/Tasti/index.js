/**
 * @typedef {import("@prismicio/client").Content.TastiSlice} TastiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TastiSlice>} TastiProps
 * @type {import("react").FC<TastiProps>}
 */
const Tasti = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for tasti (variation: {slice.variation}) Slices
    </section>
  );
};

export default Tasti;
