/**
 * @typedef {import("@prismicio/client").Content.ConclusioneMenuSlice} ConclusioneMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ConclusioneMenuSlice>} ConclusioneMenuProps
 * @type {import("react").FC<ConclusioneMenuProps>}
 */
const ConclusioneMenu = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for conclusione_menu (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ConclusioneMenu;
