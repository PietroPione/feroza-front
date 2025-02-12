/**
 * @typedef {import("@prismicio/client").Content.InfoFooterSlice} InfoFooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoFooterSlice>} InfoFooterProps
 * @type {import("react").FC<InfoFooterProps>}
 */
const InfoFooter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for info_footer (variation: {slice.variation})
      Slices
    </section>
  );
};

export default InfoFooter;
