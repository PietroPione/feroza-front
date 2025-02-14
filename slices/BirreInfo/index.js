/**
 * @typedef {import("@prismicio/client").Content.BirreInfoSlice} BirreInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BirreInfoSlice>} BirreInfoProps
 * @type {import("react").FC<BirreInfoProps>}
 */
const BirreInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for birre_info (variation: {slice.variation}) Slices
    </section>
  );
};

export default BirreInfo;
