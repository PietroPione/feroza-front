/**
 * @typedef {import("@prismicio/client").Content.PrenotaTavoloSlice} PrenotaTavoloSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrenotaTavoloSlice>} PrenotaTavoloProps
 * @type {import("react").FC<PrenotaTavoloProps>}
 */
const PrenotaTavolo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for prenota_tavolo (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PrenotaTavolo;
