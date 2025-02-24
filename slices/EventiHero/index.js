/**
 * @typedef {import("@prismicio/client").Content.EventiHeroSlice} EventiHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventiHeroSlice>} EventiHeroProps
 * @type {import("react").FC<EventiHeroProps>}
 */
const EventiHero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for eventi_hero (variation: {slice.variation})
      Slices
    </section>
  );
};

export default EventiHero;
