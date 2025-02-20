/**
 * @typedef {import("@prismicio/client").Content.SocialSlice} SocialSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialSlice>} SocialProps
 * @type {import("react").FC<SocialProps>}
 */
const Social = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for social (variation: {slice.variation}) Slices
    </section>
  );
};

export default Social;
