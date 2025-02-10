/**
 * @typedef {import("@prismicio/client").Content.LogoSlice} LogoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSlice>} LogoProps
 * @type {import("react").FC<LogoProps>}
 */
const Logo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for logo (variation: {slice.variation}) Slices
    </section>
  );
};

export default Logo;
