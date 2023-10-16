type TwitterSVGType = {
  className?: string;
};

const TwitterSVG: React.FC<TwitterSVGType> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M14.258 10.152L23.176 0H21.063L13.316 8.813L7.133 0H0L9.352 13.328L0 23.973H2.113L10.289 14.664L16.82 23.973H23.953L14.258 10.152ZM11.363 13.445L10.414 12.117L2.875 1.56H6.121L12.207 10.083L13.152 11.411L21.062 22.489H17.816L11.363 13.445Z"
      fill="currentColor"
    />
  </svg>
);

export default TwitterSVG;
