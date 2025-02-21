/**
 * @typedef {import("@prismicio/client").Content.HeroCantinaSlice} HeroCantinaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroCantinaSlice>} HeroCantinaProps
 * @type {import("react").FC<HeroCantinaProps>}
 */
const HeroCantina = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_cantina (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroCantina;
