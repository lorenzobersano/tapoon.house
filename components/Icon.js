const icons = {
  PLAY: "PLAY",
  PAUSE: "PAUSE",
};

function Icon({ name, colors }) {
  let icon;
  switch (name) {
    case icons.PLAY:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className={`fill-current ${colors.primary}`}
          />
          <path
            className={`fill-current ${colors.secondary}`}
            d="M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z"
          />
        </svg>
      );
      break;
    case icons.PAUSE:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className={`fill-current ${colors.primary}`}
          />
          <path
            className={`fill-current ${colors.secondary}`}
            d="M9 8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm5 0h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
          />
        </svg>
      );
      break;
    default:
      break;
  }

  return icon;
}

export { Icon, icons };
