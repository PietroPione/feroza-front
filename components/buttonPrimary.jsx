import Link from "next/link";

const ButtonPrimary = ({ url, testo, buttonSecondary }) => {
  

  return (
    <Link
  href={url}
  className={`inline-block w-auto max-w-max px-8 py-4 border-2 transition ${
    buttonSecondary
      ? `text-secondary border-secondary hover:bg-secondary hover:text-white`
      : "text-white bg-secondary rounded-full hover:bg-primary"
  }`}
>
  <span className="underline font-semibold">{testo}</span>
</Link>

  
  );
};

export default ButtonPrimary;
