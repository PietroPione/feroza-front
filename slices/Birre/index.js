/**
 * @typedef {import("@prismicio/client").Content.BirreSlice} BirreSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BirreSlice>} BirreProps
 * @type {import("react").FC<BirreProps>}
 */
const Birre = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for birre (variation: {slice.variation}) Slices
    </section>
  );
};

export default Birre;
