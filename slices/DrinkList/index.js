/**
 * @typedef {import("@prismicio/client").Content.DrinkListSlice} DrinkListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DrinkListSlice>} DrinkListProps
 * @type {import("react").FC<DrinkListProps>}
 */
const DrinkList = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for drink_list (variation: {slice.variation}) Slices
    </section>
  );
};

export default DrinkList;
