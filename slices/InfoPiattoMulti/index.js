/**
 * @typedef {import("@prismicio/client").Content.InfoPiattoMultiSlice} InfoPiattoMultiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoPiattoMultiSlice>} InfoPiattoMultiProps
 * @type {import("react").FC<InfoPiattoMultiProps>}
 */
const InfoPiattoMulti = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for info_piatto_multi (variation: {slice.variation})
      Slices
    </section>
  );
};

export default InfoPiattoMulti;
