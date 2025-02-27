/**
 * @typedef {import("@prismicio/client").Content.InfoFinaliDrinkSlice} InfoFinaliDrinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InfoFinaliDrinkSlice>} InfoFinaliDrinkProps
 * @type {import("react").FC<InfoFinaliDrinkProps>}
 */
const InfoFinaliDrink = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for info_finali_drink (variation: {slice.variation})
      Slices
    </section>
  );
};

export default InfoFinaliDrink;
