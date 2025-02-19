import Link from "next/link";

const ButtonPrimary = ({ url, testo, buttonSecondary, externalLink, uppercase }) => {


  return (
    <Link
      href={url}
      target={`${externalLink
        ? "_blank"
        : ""
        }`}
      className={`inline-block w-auto max-w-max px-8 py-4 border-2 transition ${buttonSecondary
        ? `text-white bg-primary rounded-full hover:bg-secondary`
        : "text-white bg-secondary rounded-full hover:bg-primary"
        } ${uppercase
          ? `uppercase`
          : ""
        }`}
    >
      <span className="underline font-semibold">{testo}</span>
    </Link>


  );
};

export default ButtonPrimary;
