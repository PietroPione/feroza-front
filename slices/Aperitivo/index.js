/**
 * @typedef {import("@prismicio/client").Content.AperitivoSlice} AperitivoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AperitivoSlice>} AperitivoProps
 * @type {import("react").FC<AperitivoProps>}
 */
const Aperitivo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for aperitivo (variation: {slice.variation}) Slices
    </section>
  );
};

export default Aperitivo;
