interface Props {
  src: string; //the image file path in folder public/images/social_media
  size: string; //sizes: medium, small (may implement more later)
  bonus_classes?: string;
}

//A round image with a background. Increases in opacity and size slightly on hover
const RectangularImage = ({ src, size, bonus_classes }: Props) => {
  let base_classes =
    bonus_classes +
    " bg-slate-300 dark:bg-slate-600 rounded-lg p-3 m-5 dynamic-opacity hover:shadow-xl hover:scale-105 transition-all ";

  //determining base class size
  base_classes =
    size == "small"
      ? base_classes + " w-36"
      : size == "medium"
      ? base_classes + " w-80"
      : size == "large"
      ? base_classes + " w-120"
      : base_classes;
  return (
    <div className={base_classes}>
      <img src={src} />
    </div>
  );
};

export default RectangularImage;
