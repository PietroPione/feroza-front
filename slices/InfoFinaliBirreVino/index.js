/**
 * @typedef {import("@prismicio/client").Content.InfoFinaliBirreVinoSlice} InfoFinaliBirreVinoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoFinaliBirreVinoSlice>} InfoFinaliBirreVinoProps
 * @type {import("react").FC<InfoFinaliBirreVinoProps>}
 */
const InfoFinaliBirreVino = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for info_finali_birre_vino (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default InfoFinaliBirreVino;
