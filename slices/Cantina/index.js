/**
 * @typedef {import("@prismicio/client").Content.CantinaSlice} CantinaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CantinaSlice>} CantinaProps
 * @type {import("react").FC<CantinaProps>}
 */
const Cantina = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cantina (variation: {slice.variation}) Slices
    </section>
  );
};

export default Cantina;
