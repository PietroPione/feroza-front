/**
 * @typedef {import("@prismicio/client").Content.CateringSlice} CateringSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CateringSlice>} CateringProps
 * @type {import("react").FC<CateringProps>}
 */
const Catering = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for catering (variation: {slice.variation}) Slices
    </section>
  );
};

export default Catering;
