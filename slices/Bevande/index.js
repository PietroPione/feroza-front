/**
 * @typedef {import("@prismicio/client").Content.BevandeSlice} BevandeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BevandeSlice>} BevandeProps
 * @type {import("react").FC<BevandeProps>}
 */
const Bevande = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for bevande (variation: {slice.variation}) Slices
    </section>
  );
};

export default Bevande;
