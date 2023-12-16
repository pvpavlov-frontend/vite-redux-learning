import { ButtonImgProps } from "./types";

function ButtonImg({
  disabled,
  name,
  type,
  onClick,
  imageUrl,
  altText,
}: ButtonImgProps) {
  return (
    <button
      className="button__img"
      disabled={disabled}
      name={name}
      type={type}
      onClick={onClick}
    >
      <img src={imageUrl} alt={altText} />
    </button>
  );
}

export default ButtonImg;
