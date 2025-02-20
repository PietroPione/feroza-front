/**
 * @typedef {import("@prismicio/client").Content.ContattiSlice} ContattiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContattiSlice>} ContattiProps
 * @type {import("react").FC<ContattiProps>}
 */
const Contatti = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contatti (variation: {slice.variation}) Slices
    </section>
  );
};

export default Contatti;
