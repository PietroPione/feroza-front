/**
 * @typedef {import("@prismicio/client").Content.RipetibileMenuSlice} RipetibileMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RipetibileMenuSlice>} RipetibileMenuProps
 * @type {import("react").FC<RipetibileMenuProps>}
 */
const RipetibileMenu = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for ripetibile_menu (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RipetibileMenu;
