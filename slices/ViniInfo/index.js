/**
 * @typedef {import("@prismicio/client").Content.ViniInfoSlice} ViniInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ViniInfoSlice>} ViniInfoProps
 * @type {import("react").FC<ViniInfoProps>}
 */
const ViniInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for vini_info (variation: {slice.variation}) Slices
    </section>
  );
};

export default ViniInfo;
