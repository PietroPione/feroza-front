/**
 * @typedef {import("@prismicio/client").Content.NavigazioneMenuSlice} NavigazioneMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigazioneMenuSlice>} NavigazioneMenuProps
 * @type {import("react").FC<NavigazioneMenuProps>}
 */
const NavigazioneMenu = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for navigazione_menu (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavigazioneMenu;
