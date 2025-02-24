/**
 * @typedef {import("@prismicio/client").Content.EventiSlice} EventiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventiSlice>} EventiProps
 * @type {import("react").FC<EventiProps>}
 */
const Eventi = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for eventi (variation: {slice.variation}) Slices
    </section>
  );
};

export default Eventi;
