/**
 * @typedef {import("@prismicio/client").Content.SezioniHomeSlice} SezioniHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SezioniHomeSlice>} SezioniHomeProps
 * @type {import("react").FC<SezioniHomeProps>}
 */
const SezioniHome = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sezioni_home (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SezioniHome;
