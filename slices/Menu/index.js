/**
 * @typedef {import("@prismicio/client").Content.MenuSlice} MenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuSlice>} MenuProps
 * @type {import("react").FC<MenuProps>}
 */
const Menu = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for menu (variation: {slice.variation}) Slices
    </section>
  );
};

export default Menu;
