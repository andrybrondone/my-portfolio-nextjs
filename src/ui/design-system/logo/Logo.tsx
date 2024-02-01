interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium": //default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={sizeLogo}
        viewBox="0 0 59 59"
      >
        <defs>
          <clipPath id="clip-path">
            <rect width="59" height="59" fill="none" />
          </clipPath>
          <filter
            id="Ellipse_1"
            x="0"
            y="0"
            width="59"
            height="59"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="B"
            x="11.5"
            y="5"
            width="32"
            height="53"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="0.5" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Grille_de_répétition_1"
          data-name="Grille de répétition 1"
          clipPath="url(#clip-path)"
        >
          <g transform="translate(-149 -154.5)">
            <g
              transform="matrix(1, 0, 0, 1, 149, 154.5)"
              filter="url(#Ellipse_1)"
            >
              <g
                id="Ellipse_1-2"
                data-name="Ellipse 1"
                transform="translate(3 2.5)"
                fill="transparent"
                stroke="#f30840"
                strokeWidth="2.5"
                strokeDasharray="4"
              >
                <circle cx="26.5" cy="26.5" r="26.5" stroke="none" />
                <circle cx="26.5" cy="26.5" r="25.25" fill="none" />
              </g>
            </g>
            <g transform="matrix(1, 0, 0, 1, 149, 154.5)" filter="url(#B)">
              <text
                id="B-2"
                data-name="B"
                transform="translate(12 5.5)"
                fill="#f30840"
                fontSize="45"
                fontFamily="MonotypeCorsiva, Monotype Corsiva"
              >
                <tspan x="0" y="36">
                  B
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};
