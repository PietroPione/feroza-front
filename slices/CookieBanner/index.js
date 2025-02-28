/**
 * @typedef {import("@prismicio/client").Content.CookieBannerSlice} CookieBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CookieBannerSlice>} CookieBannerProps
 * @type {import("react").FC<CookieBannerProps>}
 */
const CookieBanner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cookie_banner (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CookieBanner;
