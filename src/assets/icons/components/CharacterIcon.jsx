
export default function CharacterIcon(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm.847-8.145a2.502 2.502 0 10-1.694 0C5.471 8.261 4 9.775 4 11c0 .395.145.995 1 .995h6c.855 0 1-.6 1-.995 0-1.224-1.47-2.74-3.153-3.145z"
      />
    </svg>
  );
}