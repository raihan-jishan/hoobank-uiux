const Imagegradient = ({
  children,
  shadowMedium,
  shadowFull,
  shadowDarkFull,
  shadowDarkMedium,
}) => {
  return (
    <div
      className={` shadow-2xl ${
        shadowMedium
          ? "shadow-secondary/20"
          : shadowFull
          ? "shadow-secondary/90"
          : shadowDarkFull
          ? "shadow-primary/90"
          : shadowDarkMedium
          ? "shadow-primary/50"
          : "shadow-secondary/10"
      }`}
    >
      {children}
    </div>
  );
};

export default Imagegradient;
